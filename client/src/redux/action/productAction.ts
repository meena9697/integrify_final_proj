import { Dispatch } from "redux";

import { Products } from "../types"
import { FetchProductRequest, FetchProductSuccess, FetchProductFailure} from "./actionTypes"

export const fetchProductRequest = (): FetchProductRequest => {
  return {
      type: "FETCH_PRODUCT_REQUEST",
  };
};

export const fetchProductSuccess = (response: Products[]):FetchProductSuccess  => {
  return {
      type: "FETCH_PRODUCT_SUCCESS",
      payload: { response } ,
  };
};

export const fetchProductFailure = (error: any): FetchProductFailure => {
  return {
      type: "FETCH_PRODUCT_FAILURE",
      payload: { error },
  };
};

export const fetchProductData = (product_type: string) => {
  return async (dispatch: Dispatch) => {
      try {
          dispatch(fetchProductRequest());
          const response = await fetch(
              `http://localhost:8000/api/v1/makeupProduct/${product_type}`
          ).then((response) => response.json());
          dispatch(fetchProductSuccess(response));
      } catch (error) {
          dispatch(fetchProductFailure(error));
      }
  };
};