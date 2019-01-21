import { RSAA } from 'redux-api-middleware';
import { appendParams } from './helpers';
import {
    FETCH_BREED, FETCH_BREED_SUCCESS, FETCH_BREED_FAILURE,
    FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, 
    SET_API_KEY, END_SESSION, SEARCH_IMAGES, SEARCH_IMAGES_SUCCESS, SEARCH_IMAGES_FAILURE,
    CLEAR_BREEDS, VOTE_FAILURE, VOTE_SUCCESS, VOTE, LOGIN, GET_FAVORITES_SUCCESS,
    GET_FAVORITES_FAILURE, GET_FAVORITES
} from './types';

const baseurl = "https://api.thecatapi.com/v1/";

export const fetchBreeds = (params) => ({
  [RSAA]: {
    types: [FETCH_BREED, FETCH_BREED_SUCCESS, FETCH_BREED_FAILURE],
    endpoint: appendParams(baseurl + 'breeds', params),
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'x-api-key': '8cf2b5f1-026e-4396-8672-a151fb2ac41a' },
    credentials: 'same-origin'
  }
});

export function clearBreeds() {
  return {
      type: CLEAR_BREEDS
  }
}

//https://api.thecatapi.com/v1/images/search?breed_id=beng
export const searchImages = (params) => ({
  [RSAA]: {
    types: [SEARCH_IMAGES, SEARCH_IMAGES_SUCCESS, SEARCH_IMAGES_FAILURE],
    endpoint: appendParams(baseurl + 'images/search', params),
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'x-api-key': '8cf2b5f1-026e-4396-8672-a151fb2ac41a' },
    credentials: 'same-origin'
  }
});

export const fetchCategories = (params) => {
  return {
    [RSAA]: {
      types: [FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE],
      endpoint: appendParams(baseurl + 'categories', params),
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'x-api-key': '8cf2b5f1-026e-4396-8672-a151fb2ac41a' },
      credentials: 'same-origin'
    }
  };
};

export const getFavorites = (params) => {
  return {
    [RSAA]: {
      types: [GET_FAVORITES, GET_FAVORITES_SUCCESS, GET_FAVORITES_FAILURE],
      endpoint: appendParams(baseurl + 'favourites', params),
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'x-api-key': '8cf2b5f1-026e-4396-8672-a151fb2ac41a' },
      credentials: 'same-origin'
    }
  };
};

//https://api.thecatapi.com/v1/votes
export const vote = (params) => {
  return {
    [RSAA]: {
      types: [VOTE, VOTE_SUCCESS, VOTE_FAILURE],
      endpoint: baseurl + 'votes',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'x-api-key': '8cf2b5f1-026e-4396-8672-a151fb2ac41a' },
      credentials: 'same-origin',
      body: JSON.stringify(params)
    }
  };
};

//https://api.thecatapi.com/v1/favourites
export const favorite = (params) => {
  return {
    [RSAA]: {
      types: [VOTE, VOTE_SUCCESS, VOTE_FAILURE],
      endpoint: baseurl + 'favourites',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'x-api-key': '8cf2b5f1-026e-4396-8672-a151fb2ac41a' },
      credentials: 'same-origin',
      body: JSON.stringify(params)
    }
  };
};

export const setApiKey = (key) => {
    return {
        type: SET_API_KEY,
        key
      };
  };

export function login(username) {
  return {
      type: LOGIN,
      authenticated: true,
      user: { username }
  }
}

export function logout() {
    return {
        type: END_SESSION
    }
}