  import {combineReducers} from "redux" ;
  import { ProductReducer,SelectProductReducer } from "./Product_Reducer.js";

export const reducers=combineReducers(
  {allProducts:ProductReducer,
    product:SelectProductReducer,
  })