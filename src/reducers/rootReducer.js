import { combineReducers } from "redux";
import { productDetailsReducer, productListReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";

const rootReducer = combineReducers({
    productList    :    productListReducer,
    productDetails   :  productDetailsReducer,
    cart        :       cartReducer
});

const cartItemsfromLocalStorage = localStorage.getItem("cartItems") ? 
                JSON.parse(localStorage.getItem("cartItems")):[]


const initialState = {
    cart:{cartItems:cartItemsfromLocalStorage}
}

export {rootReducer,initialState}