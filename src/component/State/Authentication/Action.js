


import axios from "axios";
import { 
    ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS,
    GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS 
} from "./ActionTypes";
import { api, API_URL } from "../../config/api";

export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            
            // Dispatch register success with both token and user data
            dispatch({ 
                type: REGISTER_SUCCESS, 
                payload: {
                    token: data.jwt,
                    user: data.user // Make sure your backend returns user data
                }
            });
            
            // Fetch complete user profile after registration
            await dispatch(getUser(data.jwt));
            
            // Navigation based on role
            if (data.role === "ROLE_RESTURANT_OWNER") {
                reqData.navigate("/admin/restaurant");
            } else {
                reqData.navigate("/");
            }
            
            console.log("Register success", data);
        }
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.message });
        console.log("Register error", error);
    }
};

export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);
        
        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            
            // Dispatch login success with both token and user data
            dispatch({ 
                type: LOGIN_SUCCESS, 
                payload: {
                    token: data.jwt,
                    user: data.user // Make sure your backend returns user data
                }
            });
            
            // Fetch complete user profile after login
            await dispatch(getUser(data.jwt));
            
            // Navigation based on role
            if (data.role === "ROLE_RESTURANT_OWNER") {
                reqData.navigate("/admin/restaurant");
            } else {
                reqData.navigate("/");
            }
            
            console.log("Login success", data);
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        console.log("Login error", error);
    }
};

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        const { data } = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        
        dispatch({ 
            type: GET_USER_SUCCESS, 
            payload: data // Directly use the user data from response
        });
        
        console.log("user profile", data);
        return data; // Return user data for potential chaining
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error.message });
        console.log("Get user error", error);
        throw error; // Re-throw for error handling in components
    }
};

export const addToFavorite = (jwt, restaurantId) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST });
    try {
        const { data } = await api.post(
            `/api/restaurants/${restaurantId}/add-favorite`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );
        
        dispatch({ 
            type: ADD_TO_FAVORITE_SUCCESS, 
            payload: data // Updated favorites data
        });
        
        console.log("Added to favorite", data);
        return data;
    } catch (error) {
        dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error.message });
        console.log("Add to favorite error", error);
        throw error;
    }
};

export const logout = () => (dispatch) => {
    try {
        localStorage.clear();
        dispatch({ type: LOGOUT });
        console.log("Logout success");
    } catch (error) {
        console.log("Logout error", error);
    }
};