import  { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE,} from "./constants"
import { Products } from "../types";

export type ActionTypes =  FetchProductsRequest | FetchProductsSuccess | FetchProductsFailure | FetchProductRequest | FetchProductSuccess | FetchProductFailure

export type FetchProductsRequest = {
  type: typeof FETCH_PRODUCTS_REQUEST
}

export type FetchProductsSuccess = {
  type: typeof FETCH_PRODUCTS_SUCCESS
  payload: {
    response: Products[],
  }}

  export type FetchProductsFailure ={
    type: typeof FETCH_PRODUCTS_FAILURE
    payload: {
      error: any
    }
  }
  export type FetchProductRequest = {
    type: typeof FETCH_PRODUCT_REQUEST
  }

  export type FetchProductSuccess = {
    type: typeof FETCH_PRODUCT_SUCCESS
    payload: {
      response : Products[]
    }
  }

  export type FetchProductFailure = {
    type: typeof FETCH_PRODUCT_FAILURE
    payload: {
      error: any
    }
  }