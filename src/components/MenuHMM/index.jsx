import { Link } from "react-router-dom";
import { useTranslationContext } from "../../contexts/TranslationContext";
import { HMMLogo } from "../HMMLogo";
import { LanguageChooser } from "../LanguageChooser";
import { Social } from "../Social";
import "./styles.css";

export const MenuHMM = () => {
  const [state] = useTranslationContext();
  const translations = state.translations;

  return (
    <div className="MenuHMM">
      <HMMLogo height="60px" style={{ float: "left" }} />
      <nav className="items-menu">
        <Link to="/">{translations["home"]}</Link>
        <Link to="/news">{translations["news"]}</Link>
        <Link to="/extra1">{translations["extra1"]}</Link>
        <Link to="/extra2">{translations["extra2"]}</Link>
      </nav>
      <Social />
      <LanguageChooser />
      <div style={{ clear: "both" }}></div>
    </div>
  );
};
