import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState, Products } from "../redux/types";
import { fetchProducts } from "../redux/action/productsAction";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { Link } from "react-router-dom";

const styles = {
  media: {
    height: 150,
    width: 300,
    paddingTop: "5.25%", // 16:9
  },
};
export default function ProductsPage() {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 25));
    setPage(1);
  };

  const dispatch = useDispatch<any>();
  const productsNameData = useSelector(
    (appState: AppState) => appState.productsData.productsData
  );
  const loading = useSelector(
    (appState: AppState) => appState.productsData.loading
  );
  console.log(loading, "page loading");
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
          padding: "0.5rem",
        }}
      >
        {productsNameData &&
          productsNameData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((products: Products) => {
              return (
                <Card
                  sx={{
                    maxwidth: 300,
                    maxheight: 500,
                    margin: "1rem",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ fontSize: 20 }}>
                    <b>{products.brand}</b>
                  </Typography>
                  <CardMedia>
                    <img src={products.image_link} style={styles.media} />
                  </CardMedia>
                  <Typography sx={{ fontSize: 15, color: "black" }}>
                    <b>{products.name}</b>
                  </Typography>
                  <Typography sx={{ fontSize: 15, color: "black" }}>
                    {products.product_type}
                  </Typography>
                  <Typography sx={{ fontSize: 15, color: "black" }}>
                    {products.price} {products.price_sign}{" "}
                  </Typography>
                  <CardActions>
                    <Link to = "/products/:product_type">
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              );
            })}
      </Box>
      <CardActions sx={{ justifyContent: "center" }}></CardActions>
      <TablePagination
        component="div"
        count={1000}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}
