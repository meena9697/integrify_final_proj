import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductData } from "../redux/action/productAction";
import { AppState, Products } from "../redux/types"
import ProductComp from "../components/ProductComp";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ProductPage() {
  const { product_type } = useParams();

  const dispatch = useDispatch<any>();

  const productNameData = useSelector(
    (appState: AppState) => appState.productData.productData
  );
  const error = useSelector(
    (appState: AppState) => appState.productData.error
  );
  const loading = useSelector(
    (appState: AppState) => appState.productData.loading
  );

  useEffect(() => {
    if (product_type) {
      dispatch(fetchProductData(product_type));
    }
  }, [dispatch, product_type]);

  if (error) return <div>There is an error</div>;
  if (loading)
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  return (
    <div>
      <h1>fhj</h1>
      {productNameData &&
        productNameData
          .filter((data) => data.brand.toLowerCase())
          .map((seleted_brand: Products) => {
            return (
              <>
                <ProductComp seleted_brand={seleted_brand} />
              </>
            );
          })}
    </div>
  );
}          
