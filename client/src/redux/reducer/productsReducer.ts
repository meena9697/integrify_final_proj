import { Products } from "../types" ;
import { ActionTypes } from "../action/actionTypes";

type InitialState = {
  productsData: Products[];
  loading: boolean;
  error: String;
};

const initialState: InitialState = {
  loading: false,
  productsData: [],
  error: "",
};

const productsReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        productsData: action.payload.response,
      };

      case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      default:
        return state;  
    }
}
export default productsReducer