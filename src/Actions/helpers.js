export const appendParams = (endpoint, queryObj) => {
    if (queryObj) {
      const query = Object.keys(queryObj).map((key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(queryObj[key])}`)
        .join('&');
      return [endpoint, query].join('?');
    }
    return endpoint;
  };
  
  export default appendParams;
  