import { useTranslationContext } from "../../contexts/TranslationContext";
import { AboutTheGameCard } from "../AboutTheGameCard";

import "./styles.css";

export const AboutTheGame = () => {
  const Posts = [
    {
      id: 0,
      image: "../image.png",
      text: "",
    },
    {
      id: 1,
      image: "../image.png",
      text: "",
    },
  ];

  const [state] = useTranslationContext();
  const translations = state.translations;

  return (
    <div className="about-game">
      <h1>{translations["about the game"]}</h1>
      <div className="about-game-cards">
        {Posts.map((p) => {
          return <AboutTheGameCard key={p.id} />;
        })}
      </div>
    </div>
  );
};
