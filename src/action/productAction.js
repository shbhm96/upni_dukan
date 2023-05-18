import { PRODOCT_LIST_FAIL, 
        PRODOCT_LIST_REQUEST, 
        PRODOCT_LIST_SUCCESS,
        PRODOCT_DETAILS_REQUEST,
        PRODOCT_DETAILS_SUCCESS,
        PRODOCT_DETAILS_FAIL

     } from '../constants/productConstant'
import backendApi from '../api/backend'

const listProducts = () =>async(dispatch)=>{
    try{
        dispatch({type:PRODOCT_LIST_REQUEST})
        const {data} = await backendApi.get("/products")        
        dispatch({
            type:PRODOCT_LIST_SUCCESS,
            payload: data
        })
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:PRODOCT_LIST_FAIL,payload:error })
    }   
}

const productDetails = (id) =>async(dispatch)=>{
    try{
        dispatch({type:PRODOCT_DETAILS_REQUEST})
        const {data} = await backendApi.get(`/products/${id}`)
        dispatch({
            type:PRODOCT_DETAILS_SUCCESS,
            payload: data
        })
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:PRODOCT_DETAILS_FAIL,payload:error })
    }   
}

export {productDetails,listProducts}