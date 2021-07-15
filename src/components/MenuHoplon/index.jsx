import { Link } from 'react-router-dom';
import { useTranslationContext } from '../../contexts/TranslationContext';
import { HoplonLogo } from '../HoplonLogo';
import './styles.css';

export const MenuHoplon = () => {
  const [state, actions] = useTranslationContext();
  return (
    <div className="MenuHoplon">
      <HoplonLogo />
      <nav>
        <a href={state.translations['hoplon.menu.url1']}>{state.translations['hoplon.menu.item1']}</a>
        <a href={state.translations['hoplon.menu.url2']}>{state.translations['hoplon.menu.item2']}</a>
        <a href={state.translations['hoplon.menu.url3']}>{state.translations['hoplon.menu.item3']}</a>
        <a href={state.translations['hoplon.menu.url4']}>{state.translations['hoplon.menu.item4']}</a>
      </nav>
    </div>
  );
};
