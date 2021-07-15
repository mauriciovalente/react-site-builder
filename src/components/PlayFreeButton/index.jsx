import { useTranslationContext } from '../../contexts/TranslationContext';
import { Button } from '../Button';
import './styles.css';

const handleClick = () => {
  console.log('clicou no jogue gratis');
};

export const PlayFreeButton = () => {
  const [state, dispatch] = useTranslationContext();
  const translations = state.translations;

  return <Button type="button" onClick={handleClick} text={translations['play free']} />;
};
