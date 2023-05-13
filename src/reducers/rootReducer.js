import { combineReducers } from "redux";
import { productListReducer } from "./productReducers";

const rootReducer = combineReducers({
    productList:productListReducer,
});

const initialState = {}

export {rootReducer,initialState}