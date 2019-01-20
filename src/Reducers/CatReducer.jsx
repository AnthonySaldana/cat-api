import {
    SET_API_KEY, FETCH_BREED_SUCCESS, FETCH_CATEGORIES_SUCCESS,
    FETCH_BREED_FAILURE
} from '../Actions/Types';
  
const INITIAL_STATE = {
};
  
export default function (state = INITIAL_STATE, action) {
switch (action.type) {
    case FETCH_BREED_SUCCESS:
    return {
        ...state
    };
    case FETCH_BREED_FAILURE:
    return {
        ...state
    };
    case FETCH_CATEGORIES_SUCCESS:
    return {
        ...state
    };
    case SET_API_KEY:
    return {
        ...state
    }
    default: return state;
}
}
