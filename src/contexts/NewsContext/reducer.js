import * as types from "./action-types";

export const newsReducer = (state, action) => {
  console.log(action.type);

  switch (action.type) {
    case types.LATEST_NEWS_LOADING: {
      return { ...state, loading: true };
    }
    case types.LATEST_NEWS_SUCCESS: {
      return { ...state, loading: false, ...action.payload };
    }
    case types.LATEST_NEWS_ERROR: {
      return { ...state, loading: false };
    }
    case types.NEWS_LOADING: {
      return { ...state, loading: true };
    }
    case types.NEWS_SUCCESS: {
      return { ...state, loading: false, ...action.payload };
    }
    case types.NEWS_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      console.log("Action type not found" + action.type);
      return { ...state };
    }
  }
};
