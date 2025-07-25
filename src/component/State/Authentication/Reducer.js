


import { isPresentInFavorites } from "../../config/logic";
import {
  ADD_TO_FAVORITE_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT
} from "./ActionTypes";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
  favorites: [], // Fixed typo from 'favorotes'
  success: null,
  isAuthenticated: false // Added authentication flag
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case ADD_TO_FAVORITE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jwt: action.payload, // Expecting { token, user } structure
        success:"Register Success",
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
           user: action.payload,
        
         
      };

    case ADD_TO_FAVORITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        favorites: isPresentInFavorites(state.favorites, action.payload)
          ? state.favorites.filter((item) => item.id !== action.payload.id)
          : [action.payload, ...state.favorites]
      };
      case LOGOUT:
        return  initialState;

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case ADD_TO_FAVORITE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: null
      };

    case LOGOUT:
      return {
        ...initialState // Reset to initial state on logout
      };

    default:
      return state;
  }
};