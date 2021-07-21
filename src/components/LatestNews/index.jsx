import { useEffect } from "react";
import { useNewsContext } from "../../contexts/NewsContext";
import { useTranslationContext } from "../../contexts/TranslationContext";
import "./styles.css";

export const LatestNews = () => {
  const [state] = useTranslationContext();
  const translations = state.translations;

  const [stateNews, actions] = useNewsContext();

  useEffect(() => {
    actions.loadLatestNews({ lang: state.language, offset: 0, limit: 3 });
    console.log("retrieve news");
  }, [actions, state.language]);

  return (
    <div className="latest-news">
      <h1 className="lastest-title">{translations["latest news"]}</h1>
      <div className="latest-news-cards">
        {stateNews.news.map((n) => (
          <div key={n.id} className="news-card">
            <img src={n.image} alt="" />
            {n.title}
          </div>
        ))}
      </div>
      <div>
        <button type="button" className="action-button">
          {translations["see more"]}
        </button>
      </div>
    </div>
  );
};
