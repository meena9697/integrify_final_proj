import { combineReducers } from "redux";
import  productsReducer  from "./productsReducer";
import productReducer from "./productReducer";

 const allReducers = combineReducers({
    productsData: productsReducer,
    productData: productReducer,
});
export default allReducers;