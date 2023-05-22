import { PRODOCT_DETAILS_FAIL, 
        PRODOCT_DETAILS_REQUEST, 
        PRODOCT_DETAILS_RESET, 
        PRODOCT_DETAILS_SUCCESS, 
        PRODOCT_LIST_FAIL, 
        PRODOCT_LIST_REQUEST, 
        PRODOCT_LIST_RESET, 
        PRODOCT_LIST_SUCCESS } 
from "../constants/productConstant"

export const productListReducer = (state={products:[]},action)=>{
    switch (action.type){
        case PRODOCT_LIST_REQUEST:
            return {loading : true}
        case PRODOCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}
        case PRODOCT_LIST_FAIL:
            return {loading:false,error:action.payload}
        case PRODOCT_LIST_RESET:
            return{
                products:[]
            }
        default:
            return state
    }
}

export const productDetailsReducer = (state={product:{reviews:[]}},action)=>{
    switch (action.type){
        case PRODOCT_DETAILS_REQUEST:
            return {loading : true,...state}
        case PRODOCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODOCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        case PRODOCT_DETAILS_RESET:
            return{
                product:{reviews:[]}
            }
        default:
            return state
    }
}
