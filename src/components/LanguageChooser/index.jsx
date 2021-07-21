import "./styles.css";
import globe from "../../globe-white.png";
import { useTranslationContext } from "../../contexts/TranslationContext";
import { useEffect, useState } from "react";
import { useNewsContext } from "../../contexts/NewsContext";

export const LanguageChooser = () => {
  const [state, actions] = useTranslationContext();
  const [currentLanguage, setCurrentLanguage] = useState("Português");

  const [news] = useNewsContext();

  const defaultLanguage = state.language;

  useEffect(() => {
    actions.loadHomeTranslations(defaultLanguage);
  }, [actions, defaultLanguage]);

  const handleOpenMenu = (event) => {
    const chooser = event.currentTarget;
    if (chooser.className.indexOf("open") > -1) {
      chooser.className = chooser.className.replace(" open", "");
    } else {
      chooser.className = chooser.className + " open";
    }
  };

  const handleChangeLanguage = (event) => {
    const language = event.currentTarget.getAttribute("value");
    // console.log(
    //   "Change language to ",
    //   event.currentTarget.getAttribute("value")
    // );
    actions.loadHomeTranslations(language);

    news.language = language;

    setCurrentLanguage(event.currentTarget.innerText);
  };

  return (
    <div className="language-chooser" onClick={handleOpenMenu}>
      <img src={globe} alt="globe" />
      {console.log(state)}
      <span> {currentLanguage} </span>
      <ul>
        <li onClick={handleChangeLanguage} value="pt-BR">
          {state.translations["portuguese"]}
        </li>
        <li onClick={handleChangeLanguage} value="en-US">
          {state.translations["english"]}
        </li>
        <li onClick={handleChangeLanguage} value="ru-RU">
          {state.translations["russian"]}
        </li>
        <li onClick={handleChangeLanguage} value="de-DE">
          {state.translations["german"]}
        </li>
        <li onClick={handleChangeLanguage} value="fr-FR">
          {state.translations["france"]}
        </li>
        <li onClick={handleChangeLanguage} value="es-ES">
          {state.translations["spanish"]}
        </li>
        <li onClick={handleChangeLanguage} value="tr-TR">
          {state.translations["turkish"]}
        </li>
        <li onClick={handleChangeLanguage} value="pl-PL">
          {state.translations["polish"]}
        </li>
      </ul>
    </div>
  );
};
