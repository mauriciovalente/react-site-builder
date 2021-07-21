import { useEffect } from "react";
import { useAboutTheGameContext } from "../../contexts/AboutTheGameContext";
import { useTranslationContext } from "../../contexts/TranslationContext";
import { AboutTheGameCard } from "../AboutTheGameCard";
import "./styles.css";

export const AboutTheGame = () => {
  const [state] = useTranslationContext();
  const translations = state.translations;

  const [about, aboutDispatch] = useAboutTheGameContext();

  const posts = about.about;

  useEffect(() => {
    aboutDispatch.loadAboutTheGame({
      lang: state.language,
      offset: 0,
      limit: 2,
    });
  }, [aboutDispatch, state.language]);

  return (
    <div className="about-game">
      <h1>{translations["about the game"]}</h1>
      <div className="about-game-cards">
        {posts.map((post) => {
          return <AboutTheGameCard key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
};
