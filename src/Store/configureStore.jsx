import { createStore, compose, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from '../Reducers';

const middlewares = [apiMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// IMPORTANT: to use thunk middleware, need thunk to go prior to apiMiddleware
// init store with middlweare
const configureStore = (persistedState) => {

  const enhancers = composeEnhancers(applyMiddleware(...middlewares));

  // createStore(reducer, [preloadedState], [enhancer])
  const store = createStore(
    reducers,
    persistedState,
    enhancers
  );

  // Update Redux State in Local Storage
  store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  });

  return store;
};

export default configureStore;
