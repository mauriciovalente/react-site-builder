import * as types from "./action-types";

export const aboutTheGameReducer = (state, action) => {
  console.log(action.type);

  switch (action.type) {
    case types.ABOUT_THE_GAME_SUCCESS: {
      return { ...state, loading: false, ...action.payload };
    }
    case types.ABOUT_THE_GAME_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      console.log("Action type not found " + action.type);
      return { ...state };
    }
  }
};
