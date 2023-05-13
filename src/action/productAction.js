import { PRODOCT_LIST_FAIL, PRODOCT_LIST_REQUEST, PRODOCT_LIST_SUCCESS } from '../constants/productConstant'
import products from '../products.js'

export const listProducts = () =>async(dispatch)=>{
    try{
        dispatch({type:PRODOCT_LIST_REQUEST})
        dispatch({
            type:PRODOCT_LIST_SUCCESS,
            payload: products
        })
    }catch(error){
        const err = error.response.data.message ? error.response.data.message : error.message
        dispatch({type:PRODOCT_LIST_FAIL,payload:err })
    }
    
}