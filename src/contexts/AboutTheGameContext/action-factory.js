import * as types from "./action-types";
import * as ContextURLs from "../apis";

export const actionFactory = (dispatch) => {
  return {
    loadAboutTheGame: (payload) => loadAboutTheGame(dispatch, payload),
  };
};

const loadAboutTheGame = async (dispatch, payload) => {
  const url =
    ContextURLs.URL_ABOUT_THE_GAME +
    "lang=" +
    payload.lang +
    "&offset=" +
    payload.offset +
    "&limit=" +
    payload.limit;

  const aboutTheGameRaw = await fetch(url);
  const about = await aboutTheGameRaw.json();
  console.log("inside", about);
  dispatch({
    type: types.ABOUT_THE_GAME_SUCCESS,
    payload: { about, ...payload },
  });

  return await new Promise((resolved) => {
    resolved("LOADED");
  });
};
