import backendApi from '../api/backend'
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from '../constants/orderConstants'

export const createOrder = (user) =>async(dispatch,getState)=>{
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
        const {data}= await backendApi.post(`/order`,user,config)

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


export default createOrder
