import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import productsReducer from "./reducer/productsReducer";

const middlewares = [thunk]
let composeEnhancers = compose

if(process.env.NODE_ENV === 'development'){
  if((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__){
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  }
}

const store = createStore(
  productsReducer, 
  composeEnhancers(applyMiddleware(...middlewares)
  ));
export default store;