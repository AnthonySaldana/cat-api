/* eslint-disable */
import {
    fetchLists,
    fetchList
  } from './CatActions'
  
  describe('>>>A C T I O N --- Test CatActions',()=>{
    it('+++ fetchBreeds', () => {
      const action = fetchLists({ page:1 })
      expect(action).toEqual({"@@redux-api-middleware/RSAA": {"credentials": "same-origin", "endpoint": "/api/channel_lists?page=1", "headers": {"Accept": "application/json", "Content-Type": "application/json"}, "method": "GET", "types": ["FETCH_CHANNEL_LISTS", "FETCH_CHANNEL_LISTS_SUCCESS", "FETCH_CHANNEL_LISTS_FAILURE"]}});
    });
    it('+++ fetchCategories', () => {
      const action = fetchList(1)
      expect(action).toEqual({"@@redux-api-middleware/RSAA": {"credentials": "same-origin", "endpoint": "/api/channel_lists/1", "headers": {"Accept": "application/json", "Content-Type": "application/json"}, "method": "GET", "types": ["FETCH_CHANNEL_LIST", "FETCH_CHANNEL_LIST_SUCCESS", "FETCH_CHANNEL_LIST_FAILURE"]}});
    });
    it('+++ setApiKey', () => {
        const action = fetchList(1)
        expect(action).toEqual({"@@redux-api-middleware/RSAA": {"credentials": "same-origin", "endpoint": "/api/channel_lists/1", "headers": {"Accept": "application/json", "Content-Type": "application/json"}, "method": "GET", "types": ["FETCH_CHANNEL_LIST", "FETCH_CHANNEL_LIST_SUCCESS", "FETCH_CHANNEL_LIST_FAILURE"]}});
    });
  });
  