// src/js/reducers/index.js

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      //let newstate = { ...state, articles: [ ...state.articles, action.payload] };
      let newstate = { articles: [ ...state.articles, action.payload] };
      console.log(JSON.stringify(newstate));
      return newstate;
    default:
      return state;
  }
};

export default rootReducer;
