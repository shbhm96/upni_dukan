import { combineReducers } from "redux";
import { productDetailsReducer, productListReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";
import { userLoginReducer } from "./userReducers";

const rootReducer = combineReducers({
    productList    :    productListReducer,
    productDetails   :  productDetailsReducer,
    cart            :   cartReducer,
    userLogin       :   userLoginReducer
});

const cartItemsfromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]
    
const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):[]


const initialState = {
    cart:{cartItems:cartItemsfromLocalStorage},
    userLogin:{userInfo:userInfoFromLocalStorage}
}

export {rootReducer,initialState}