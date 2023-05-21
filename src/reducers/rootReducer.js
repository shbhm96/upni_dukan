import { combineReducers } from "redux";
import { productDetailsReducer, productListReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./userReducers";
import { orderCreateReducer } from "./orderReducers";

const rootReducer = combineReducers({
    productList      :   productListReducer,
    productDetails   :   productDetailsReducer,
    cart             :   cartReducer,
    userLogin        :   userLoginReducer,
    userRegister     :   userRegisterReducer,
    userDetails      :   userDetailsReducer,
    userUpdateProfile:   userUpdateProfileReducer,
    orderCreate      :   orderCreateReducer
});

const cartItemsfromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]

const shippingAddressFromStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {}
    
const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")):null



const initialState = {
    productList:{products:null},
    cart:{cartItems:cartItemsfromLocalStorage,shippingAddress : shippingAddressFromStorage},
    userLogin:{userInfo:userInfoFromLocalStorage},    
}

export {rootReducer,initialState}