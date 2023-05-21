import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstant"
import backendApi from "../api/backend.js"

export const addToCart = (id,qty)=>async(dispatch,getState)=>{
    console.log("cart Action")
    const {data} = await backendApi.get(`/product/${id}`)
    console.log("data",data)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data.id,
            name:data.name,
            image : data.price,
            countInStock : data.countInStock,
            qty
        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) =>async(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) =>(dispatch)=>{
    dispatch({
        type:CART_SAVE_SHIPPING_ADDRESS,
        payload:data
    })
    localStorage.setItem("shipping",JSON.stringify(data))
}

export const savePaymentMethod = (data) =>(dispatch)=>{
    dispatch({
        type:CART_SAVE_PAYMENT_METHOD,
        payload:data
    })
    localStorage.setItem("paymentMethod",JSON.stringify(data))
}