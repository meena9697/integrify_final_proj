import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState, Products } from "../redux/types"
import { fetchProducts } from "../redux/action/productsAction";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import productsReducer from "../redux/reducer/productsReducer";


export default function ProductsPage () {
    const dispatch = useDispatch<any>();
    // const productsData = useSelector(
    //   (appState: AppState) => appState.productsData.productsdata
    // );
    // console.log("this is data", productsData)

    const loading = useSelector(
      (appState: AppState) => appState.productsData.loading
    );
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
      <Card sx={{ maxWidth: 345 }}>
              {/* {productsData && productsData.map((products: Products) => {
    return (
    <CardActionArea>
          <CardMedia
          component="img"
          height="140"
          image={products.image_link}
          alt= ""
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {products.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {products.name}
          </Typography>
          </CardContent>
      </CardActionArea>
      )
  })} */}
  </Card>

);
}
  