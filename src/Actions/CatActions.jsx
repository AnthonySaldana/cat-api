import { RSAA } from 'redux-api-middleware';
import { appendParams } from './helpers';
import {
    FETCH_BREED, FETCH_BREED_SUCCESS, FETCH_BREED_FAILURE,
    FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, 
    SET_API_KEY, END_SESSION, SEARCH_IMAGES, SEARCH_IMAGES_SUCCESS, SEARCH_IMAGES_FAILURE
} from './Types';

const baseurl = "https://api.thecatapi.com/v1/";

export const fetchBreeds = (params) => ({
  [RSAA]: {
    types: [FETCH_BREED, FETCH_BREED_SUCCESS, FETCH_BREED_FAILURE],
    endpoint: appendParams(baseurl + 'breeds', params),
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'same-origin'
  }
});

//https://api.thecatapi.com/v1/images/search?breed_id=beng

export const searchImages = (params) => ({
  [RSAA]: {
    types: [SEARCH_IMAGES, SEARCH_IMAGES_SUCCESS, SEARCH_IMAGES_FAILURE],
    endpoint: appendParams(baseurl + 'images/search', params),
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'same-origin'
  }
});

export const fetchCategories = (params) => {
  return {
    [RSAA]: {
      types: [FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE],
      endpoint: appendParams(baseurl + 'categories', params),
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