import { useTranslationContext } from "../../contexts/TranslationContext";
import { Button } from "../Button";
import "./styles.css";

export const InformYourEmail = () => {
  const handleClick = () => {
    console.log("register email");
  };

  const [state] = useTranslationContext();
  const translations = state.translations;

  return (
    <div>
      <h1>{translations["know more updates"]}</h1>
      <input type="email" name="email" maxLength="100" onClick={handleClick} />
      <Button text="Enviar" />
    </div>
  );
};
