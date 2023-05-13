import { PRODOCT_LIST_FAIL, 
        PRODOCT_LIST_REQUEST, 
        PRODOCT_LIST_SUCCESS } 
from "../constants/productConstant"

export const productListReducer = (state={products:[]},action)=>{
    switch (action.type){
        case PRODOCT_LIST_REQUEST:
            return {loading : true,products:[]}
        case PRODOCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}
        case PRODOCT_LIST_FAIL:
            return {loading:false,err:action.payload}
        default:
            return state
    }
}