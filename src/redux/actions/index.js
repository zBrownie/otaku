export const handleAddAnimes = newAnimes => {
    return {
      type: "GET_ANIMES",
      payload: newAnimes
    };
  };
  
  export const handleGetSeason = newSeason => {
      return {
        type: "GET_SEASON",
        payload: newSeason
      };
    };
  
  export const handleGetUser = newUser => {
    return {
      type: "GET_USER",
      payload: newUser
    };
  };
  
  export const handleGetToken = newToken => {
    return {
      type: "GET_TOKEN",
      payload: newToken
    };
  };