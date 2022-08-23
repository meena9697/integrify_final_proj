import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState, Products } from "../redux/types"
import { fetchProducts } from "../redux/action/productsAction";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";


export default function ProductsPage () {
    const dispatch = useDispatch<any>();
    const productsNameData = useSelector(
      (appState: AppState) => appState.productsData
    );
    const loading = useSelector(
      (appState: AppState) => appState.productsData.loading
    );
    console.log(loading, "page loading")
    const error = useSelector(
      (appState: AppState) => appState.productsData.error
    );
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    if (error) return <div>There is an error</div>;
    if (loading)
      return (
        <div>
          <h1>Loading..</h1>
        </div>
      );
return (
  <React.Fragment>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "1500px",
        padding: "1rem",
      }}
    >
{productsNameData && productsNameData.map((products: Products) => {
        return (
          <Card
            sx={{
              width: 400,
              maxheight: 500,
              margin: "1rem",
              textAlign: "center",
            }}
          >
            <CardHeader title={products.brand} />
            <CardMedia>
              <img src={products.image_link} />
            </CardMedia>
            <Typography sx={{ fontSize: 20, color: "black" }}>
               <b>{products.name}</b>
            </Typography>
            <Typography sx={{ fontSize: 20, color: "black" }}>
               {products.product_type}
            </Typography>
            <Typography sx={{ fontSize: 20, color: "black" }}>
            {products.price} {products.price_sign}         </Typography>
          </Card>
        ); 
      })} 
    </Box>
    <CardActions sx={{ justifyContent: "center" }}>
    </CardActions>
  </React.Fragment>
);

}
  