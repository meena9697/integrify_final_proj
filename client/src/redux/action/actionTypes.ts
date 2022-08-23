import  { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,} from "./constants"
import { Products } from "../types";

export type ActionTypes =  FetchProductsRequest | FetchProductsSuccess | FetchProductsFailure

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
