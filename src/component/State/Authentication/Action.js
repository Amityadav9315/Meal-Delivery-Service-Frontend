import axios from "axios"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"
import { api, API_URL } from "../../config/api"
import { data } from "react-router-dom"

export const registerUser=(reqData)=>async(dispatch)=>{

    dispatch({type:REGISTER_REQUEST})
    try{
        const {data}=await axios.post(`${API_URL}/auth/signup`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data.jwt);
        if(data.role==="ROLE_RESTURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else {
             reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
        console.log("register success",data)

        
    }
    catch(error)  {
        dispatch({type:REGISTER_FAILURE,payload:error})
        console.log("error",error)
    }
}

export const loginUser=(reqData)=>async(dispatch)=>{

    dispatch({type:LOGIN_REQUEST})
    try{
        const {data}=await axios.post(`${API_URL}/auth/signin`,reqData.userData)
        if(data.jwt)localStorage.setItem("jwt",data.jwt);
        if(data.role==="ROLE_RESTURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        }
        else {
             reqData.navigate("/")
        }
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})
        console.log("Login success",data)

        
    }
    catch(error)  {
        dispatch({type:LOGIN_FAILURE,payload:error})
        console.log("error",error)
    }
}


export const getUser=(jwt)=>async(dispatch)=>{

    dispatch({type:GET_USER_REQUEST})
    try{
        const {data}=await api.get(`/auth/signin`,{
            headers:{
                Authorization:`Bearer  ${jwt}`
            }
        })
        
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt.data})

        console.log("user profile",data)
    }
    catch(error)  {
        dispatch({type:GET_USER_FAILURE,payload:error})
        console.log("error",error)
    }
}


export const addToFavorite=(jwt,restaurantId)=>async(dispatch)=>{

    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try{
        const {data}=await api.post(`/api/restaurants/${restaurantId}/
            add-favorite`,{},{
            headers:{
                Authorization:`Bearer  ${jwt}`
            }
        })
        
        dispatch({type:ADD_TO_FAVORITE_SUCCESS,payload:data.jwt})

        console.log("added to favorite",data)
    }
    catch(error)  {
        dispatch({type:ADD_TO_FAVORITE_FAILURE,payload:error})
        console.log("error",error)
    }
}


export const logout=()=>async(dispatch)=>{

    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try{
       
        localStorage.clear();
        dispatch({type:LOGOUT})

        console.log("logout success",data)
    }
    catch(error)  {
        console.log("error",error)
    }
}