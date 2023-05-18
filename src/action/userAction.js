import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstant"
import backendApi from "../api/backend.js"


export const loginUser =(email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}= await backendApi.post("/users/login",{email,password},config)

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data,
            loading: false
        })
        localStorage.setItem("userInfo",JSON.stringify(data))
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:USER_LOGIN_FAIL,payload:error,loading:true })
    }
}