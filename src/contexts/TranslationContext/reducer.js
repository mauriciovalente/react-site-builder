import * as types from "./action-types";

export const translationHomeReducer = (state, action) => {
  console.log(action.type);

  switch (action.type) {
    case types.TRANSLATION_LOADING: {
      return { ...state, loading: true };
    }
    case types.TRANSLATION_SUCCESS: {
      return { ...state, loading: false, ...action.payload };
    }
    case types.TRANSLATION_CHANGE: {
      return { ...state, translations: action.payload };
    }
    case types.TRANSLATION_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      console.log("Action type not found" + action.type);
      return { ...state };
    }
  }
};
