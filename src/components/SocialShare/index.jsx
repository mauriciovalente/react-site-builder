import "./styles.css";
import { SpanLink } from "../SpanLink";
import { data } from "./data";
import { useTranslationContext } from "../../contexts/TranslationContext";

export const SocialShare = () => {
  const [state] = useTranslationContext();
  const translations = state.translations;

  const social = data;
  return (
    <div className="social-share">
      {social.map((s) => {
        return (
          <SpanLink
            className={s.class}
            key={s.id}
            url={translations[s.url]}
            title={translations[s.title]}
            target="_blank"
          />
        );
      })}
    </div>
  );
};
