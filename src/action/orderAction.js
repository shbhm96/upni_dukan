import backendApi from '../api/backend'
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS } from '../constants/orderConstants'

export const createOrder = (order) =>async(dispatch,getState)=>{
    
    try{
        dispatch({
            type:ORDER_CREATE_REQUEST,
            loading:true
        })

        const {userLogin : { userInfo }} = getState()


        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        console.log(config)
        const {data}= await backendApi.post(`/order`,order,config)

        dispatch({
            type:ORDER_CREATE_SUCCESS,
            payload:data,
        })
        
           
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:ORDER_CREATE_FAIL,payload:error,loading:true })
    }
}
export const getOrderDetails = (id) =>async(dispatch,getState)=>{
    
    try{
        dispatch({
            type:ORDER_DETAILS_REQUEST,
            loading:true
        })

        const {userLogin : { userInfo }} = getState()


        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        console.log(config)
        const {data}= await backendApi.get(`/order/${id}`,config)

        dispatch({
            type:ORDER_DETAILS_SUCCESS,
            payload:data,
        })
        
           
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:ORDER_DETAILS_FAIL,payload:error,loading:true })
    }
}



