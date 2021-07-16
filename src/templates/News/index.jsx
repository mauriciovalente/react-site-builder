import { MenuHMM } from "../../components/MenuHMM";
import { MenuHoplon } from "../../components/MenuHoplon";
import { TranslationProvider } from "../../contexts/TranslationContext";

export const News = () => {
  return (
    <TranslationProvider>
      <div className="News">
        <MenuHoplon />
        <MenuHMM />
      </div>
    </TranslationProvider>
  );
};
