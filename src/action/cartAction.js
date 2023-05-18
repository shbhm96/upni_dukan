import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant"
import backendApi from "../api/backend.js"

export const addToCart = (id,qty)=>async(dispatch,getState)=>{
    const {data} = await backendApi.get(`/product/${id}`)

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