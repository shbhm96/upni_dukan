import { 
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT, 
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} 
    from "../constants/userConstant"
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

export const logoutUser = () =>(dispatch)=>{   
        localStorage.removeItem("userInfo")
        dispatch({type:USER_LOGOUT})        
}

export const registerUser =(name,email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}= await backendApi.post("/users",{name,email,password},config)

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data,
            loading: false
        })
        console.log("User registered")
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        console.log("New User Logged in")

        localStorage.setItem("userInfo",JSON.stringify(data))
        
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:USER_REGISTER_FAIL,payload:error,loading:true })
    }
}

export const getUserDetails =(id)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:USER_DETAILS_REQUEST
        })

        const {userLogin : {userInfo}} = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data}= await backendApi.post(`/users/${id}`,config)

        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data,
        })
        
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })        
    }catch(err){
        const error = err.response && err.response.data.message ? err.response.data.message : err.message
        console.log(err.message)
        dispatch({type:USER_DETAILS_FAIL,payload:error,loading:true })
    }
}