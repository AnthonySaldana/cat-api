import {
    SET_API_KEY, FETCH_BREED_SUCCESS, FETCH_CATEGORIES_SUCCESS,
    FETCH_BREED_FAILURE
} from '../Actions/Types';
  
const INITIAL_STATE = {
    breeds: {}
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
    default: return state;
}
}
