import * as types from "./action-types";
import * as ContextURLs from "../apis";

export const actionFactory = (dispatch) => {
  return {
    loadLatestNews: (payload) => loadLatestNews(dispatch, payload),
  };
};

const loadLatestNews = async (dispatch, payload) => {
  const url =
    ContextURLs.URL_NEWS +
    "lang=" +
    payload.lang +
    "&offset=" +
    payload.offset +
    "&limit=" +
    payload.limit;

  const latestNewsRaw = await fetch(url);
  const news = await latestNewsRaw.json();

  dispatch({
    type: types.LATEST_NEWS_SUCCESS,
    payload: { news, ...payload },
  });

  return await new Promise((resolved) => {
    resolved("LOADED");
  });
};
