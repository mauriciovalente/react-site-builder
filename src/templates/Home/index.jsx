import "./index.css";
import { MenuHoplon } from "../../components/MenuHoplon";
import { MenuHMM } from "../../components/MenuHMM";
import { PlayFreeSection } from "../../components/PlayFreeSection";
import { LatestNews } from "../../components/LatestNews";
import { AboutTheGame } from "../../components/AboutTheGame";
import { KnowMore } from "../../components/KnowMore";
import { Footer } from "../../components/Footer";
import { TranslationProvider } from "../../contexts/TranslationContext";
import { NewsProvider } from "../../contexts/NewsContext";
import { AboutTheGameProvider } from "../../contexts/AboutTheGameContext";

export const Home = () => {
  return (
    <TranslationProvider>
      <NewsProvider>
        <AboutTheGameProvider>
          <div className="Home">
            <MenuHoplon />
            <MenuHMM />
            <PlayFreeSection />
            <LatestNews />
            <AboutTheGame />
            <KnowMore />
            <Footer />
          </div>
        </AboutTheGameProvider>
      </NewsProvider>
    </TranslationProvider>
  );
};
