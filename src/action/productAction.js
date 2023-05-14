import axios from 'axios'
import { PRODOCT_LIST_FAIL, PRODOCT_LIST_REQUEST, PRODOCT_LIST_SUCCESS } from '../constants/productConstant'

export const listProducts = () =>async(dispatch)=>{
    try{
        dispatch({type:PRODOCT_LIST_REQUEST})
        const {data} = await axios.get("/api/products")
        dispatch({
            type:PRODOCT_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        const err = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch({type:PRODOCT_LIST_FAIL,payload:err })
    }   
}
