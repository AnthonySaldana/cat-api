import {
    SET_API_KEY, FETCH_BREED_SUCCESS, FETCH_CATEGORIES_SUCCESS,
    FETCH_BREED_FAILURE,
    CLEAR_BREEDS,
    SEARCH_IMAGES_SUCCESS,
    SEARCH_IMAGES_FAILURE,
    LOGIN
} from '../Actions/Types';
  
const INITIAL_STATE = {
    breeds: [],
    images: []
};
  
export default function (state = INITIAL_STATE, action) {
switch (action.type) {
    case FETCH_BREED_SUCCESS:
    return {
        ...state,
        breeds: action.payload
    };
    case FETCH_BREED_FAILURE:
    return {
        ...state,
        error: "API Unavailable Try Again Later"
    };
    case CLEAR_BREEDS:
    return {
        ...state,
        breeds: []
    };
    case SEARCH_IMAGES_SUCCESS:
    return {
        ...state,
        images: action.payload
    };
    case SEARCH_IMAGES_FAILURE:
    return {
        ...state,
        error: "API Unavailable Try Again Later"
    };
    case FETCH_CATEGORIES_SUCCESS:
    return {
        ...state,
        categories: action.payload
    };
    case SET_API_KEY:
    return {
        ...state,
        apiKey: action.key
    }
    case LOGIN:
    return {
        ...state,
        user: action.user,
        authenticated: action.authenticated
    }
    default: return state;
}
}
