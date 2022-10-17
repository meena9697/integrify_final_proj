import { Dispatch } from "redux";

import { Products } from "../types";
import {
  FetchProductsRequest,
  FetchProductsSuccess,
  FetchProductsFailure,
} from "./actionTypes";

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchProductsRequest());
      const response: Products[] = await fetch(
        "http://localhost:8000/api/v1/makeupProduct"
      ).then((response) => response.json());
      console.log(response, "this is the res");
      dispatch(fetchProductsSuccess(response));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};
export const fetchProductsRequest = (): FetchProductsRequest => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};
export const fetchProductsSuccess = (
  response: Products[]
): FetchProductsSuccess => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: { response },
  };
};
export const fetchProductsFailure = (error: any): FetchProductsFailure => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};
