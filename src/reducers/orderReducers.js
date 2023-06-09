import { MY_ORDER_LIST_FAIL, MY_ORDER_LIST_REQUEST, MY_ORDER_LIST_RESET, MY_ORDER_LIST_SUCCESS, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST,  ORDER_PAY_SUCCESS } from "../constants/orderConstants"


const orderCreateReducer = (state = {},action) => {
  switch(action.type){
    case ORDER_CREATE_REQUEST:
      return {
        loading:true
      }
    case ORDER_CREATE_SUCCESS:
      return{
        loading:false,
        success:true,
        order:action.payload
      }
    case ORDER_CREATE_FAIL:{
      return{
        loading :false,
        error : action.payload
      }
    }
    default:
      return{
        state
      }
  }
}

const orderDetailsReducer = (state = {loading:true,orderItems:[],shippingAddress:{}},action) => {
  switch(action.type){
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading:true
      }
    case ORDER_DETAILS_SUCCESS:
      return{
        ...state,
        loading:false,
        order:action.payload
      }
    case ORDER_DETAILS_FAIL:
      return{
        loading :false,
        error : action.payload
      }
    
    default:
      return{
        state
      }
  }
}

const orderPayReducer = (state = {},action) => {
  switch(action.type){
    case ORDER_PAY_REQUEST:
      return {
        ...state,
        loading:true
      }
    case ORDER_PAY_SUCCESS:
      return{
        ...state,
        loading:false,
        success:true        
      }
    case ORDER_PAY_FAIL:
      return{
        loading :false,
        error : action.payload
      }    
    default:
      return{
        state
      }
  }
}

const myOrderListReducer = (state = {},action) => {
  switch(action.type){
    case MY_ORDER_LIST_REQUEST:
      return {
        loading:true
      }
    case MY_ORDER_LIST_SUCCESS:
      return{
        loading:false,
        orders:action.payload      
      }
    case MY_ORDER_LIST_FAIL:
      return{
        loading :false,
        error : action.payload
      }
    case MY_ORDER_LIST_RESET:
      return{
        orders:[]
      }
      default:
        return {
          state
        }
  }
}
export {orderCreateReducer,orderDetailsReducer,orderPayReducer,myOrderListReducer}
