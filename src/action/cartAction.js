import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant"

export const addToCart = (id,qty)=>async(dispatch,getState)=>{
    const {data} = await axios.get(`/api/product/${id}`)

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