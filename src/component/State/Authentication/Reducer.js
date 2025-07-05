import { isPresentInFavorites } from "../../config/logic"
import { ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"

const initialState={

    user:null,
    isLoading:false,
    error:null,
    favorotes:[],
    success:null

}
 export const authReducer=(state=initialState,action )=>{

    switch(action.type)  {
        case REGISTER_REQUEST:
            case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            case ADD_TO_FAVORITE_REQUEST:
                return  {...state,isLoading:true,error:null,success:null}
                  

                case REGISTER_SUCCESS: 
                case LOGIN_SUCCESS:
                    return{  ...state,isLoading:false,jwt:action.payload,success:"Register Success",}

                  case ADD_TO_FAVORITE_SUCCESS:
                    return {
                        ...state,
                        isLoading:false,
                        error:null,
                        favorites:isPresentInFavorites(state.favorites,action.payload)
                        ?  state.favorites.filter((item)=>item.id!==action.payload.id)
                        :[action.payload,...state.favorites]

                    }
                    default:
                        return state;
   
            }


}