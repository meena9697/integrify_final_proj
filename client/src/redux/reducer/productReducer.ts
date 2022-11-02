import { ActionTypes } from "../action/actionTypes"
import { Products } from "../types";

type InitialState = {
  loading: Boolean,
  productData: Products[],
  error: String | null
}
const initialState: InitialState = {
  loading: false,
  productData: [],
  error: "",
};

const productReducer = (state = initialState, action:ActionTypes ) => {
  switch (action.type) {
    case "FETCH_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCT_SUCCESS":
        return {
          ...state,
        loading: false,
        productData: action.payload.response,
      };
    case "FETCH_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default productReducer;