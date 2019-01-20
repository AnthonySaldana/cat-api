import { combineReducers } from 'redux';
import cats from './cats';

// after this point, go through middleware and delete unnecessary actions :)
const appReducer = combineReducers({
    cats
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'END_SESSION') {
    newState = undefined;
  }

  return appReducer(newState, action);
};

export default rootReducer;
