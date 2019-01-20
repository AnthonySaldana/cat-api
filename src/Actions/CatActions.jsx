import { RSAA } from 'redux-api-middleware';
import fetch from 'cross-fetch'
import { appendParams } from './helpers';
import {
    FETCH_BREED, FETCH_BREED_SUCCESS, FETCH_BREED_FAILURE,
    FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, 
    SET_API_KEY, END_SESSION
} from './types';

export const fetchBreeds = (query) => ({
  [RSAA]: {
    types: [FETCH_BREED, FETCH_BREED_SUCCESS, FETCH_BREED_FAILURE],
    endpoint: appendParams('/api/breeds', query),
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'same-origin'
  }
});

function fetchPosts(subreddit) {
    return dispatch => {
      dispatch(requestPosts(subreddit))
      return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
    }
  }

export const fetchCategories = (query) => {
  return {
    [RSAA]: {
      types: [FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE],
      endpoint: appendParams('https://thecatapi.com/categories', query),
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      credentials: 'same-origin'
    }
  };
};

export const setApiKey = (key) => {
    return {
        type: SET_API_KEY,
        key
      };
  };

export function endSession() {
    return {
        type: END_SESSION
    }
}