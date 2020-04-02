const initState = {
    userdata: {},
    animes: [],
    season: [],
    token: ""
  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case "GET_ANIMES":
        return { ...state, animes: action.payload };
      case "GET_SEASON":
        return { ...state, season: action.payload };
      case "GET_USER":
        return { ...state, userdata: action.payload };
      case "GET_TOKEN":
        return { ...state, token: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;