import * as types from "./action-types";
import * as ContextURLs from "../apis";

export const actionFactory = (dispatch) => {
  return {
    loadHomeTranslations: (payload) =>
      loadTranslation(dispatch, payload, "home"),
    loadNewsTranslations: (payload) =>
      loadTranslation(dispatch, payload, "news"),
  };
};

const loadTranslation = async (dispatch, payload, page) => {
  let lang = "";
  if (payload !== "") {
    lang += "&lang=" + payload;
  }

  const url = ContextURLs.URL_TRANSLATION + "page=" + page + lang;
  const translationsRaw = await fetch(url);
  const translations = await translationsRaw.json();

  dispatch({
    type: types.TRANSLATION_SUCCESS,
    payload: { translations, payload },
  });

  return await new Promise((resolved) => {
    resolved("LOADED");
  });
};
