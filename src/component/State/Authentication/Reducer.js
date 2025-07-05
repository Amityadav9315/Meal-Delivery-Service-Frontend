import { ADD_TO_FAVORITE_REQUEST, GET_USER_REQUEST, LOGIN_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"

const initialState={

    user:null,
    isLoading:false,
    error:null,
    favorotes:[],
    success:null

}
const authReducer=(state=initialState,action )=>{

    switch(action.type)  {
        case REGISTER_REQUEST:
            case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            case ADD_TO_FAVORITE_REQUEST:
                return  {...state,isLoading:true,error:null,success:null}
                  

                case REGISTER_SUCCESS 
   
   
            }


}