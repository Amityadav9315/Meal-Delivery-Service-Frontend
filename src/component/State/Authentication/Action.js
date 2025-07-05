import axios from "axios"
import { ADD_TO_FAVORITE_REQUEST, GET_USER_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"
import { api, API_URL } from "../../config/api"

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
        
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})

        console.log("user profile",data)
    }
    catch(error)  {
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
        
        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})

        console.log("user profile",data)
    }
    catch(error)  {
        console.log("error",error)
    }
}