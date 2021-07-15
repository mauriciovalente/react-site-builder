import './styles.css';
import globe from '../../globe-white.png';
import { useTranslationContext } from '../../contexts/TranslationContext';
import { useEffect, useState } from 'react';

export const LanguageChooser = () => {
  const [state, actions] = useTranslationContext();
  const [currentLanguage, setCurrentLanguage] = useState('Português');

  useEffect(() => {
    actions.loadHomeTranslations('PT');
  }, [actions]);

  const handleOpenMenu = (event) => {
    const chooser = event.currentTarget;
    if (chooser.className.indexOf('open') > -1) {
      chooser.className = chooser.className.replace(' open', '');
    } else {
      chooser.className = chooser.className + ' open';
    }
  };

  const handleChangeLanguage = (event) => {
    const language = event.currentTarget.getAttribute('value');
    console.log('Change language to ', event.currentTarget.getAttribute('value'));
    actions.loadHomeTranslations(language);

    setCurrentLanguage(event.currentTarget.innerText);
  };

  return (
    <div className="language-chooser" onClick={handleOpenMenu}>
      <img src={globe} alt="globe" />
      {console.log(state)}
      <span> {currentLanguage} </span>
      <ul>
        <li onClick={handleChangeLanguage} value="PT">
          {state.translations['portuguese']}
        </li>
        <li onClick={handleChangeLanguage} value="EN">
          {state.translations['english']}
        </li>
        <li onClick={handleChangeLanguage} value="ES">
          {state.translations['spanish']}
        </li>
        <li onClick={handleChangeLanguage} value="IT">
          {state.translations['italian']}
        </li>
      </ul>
    </div>
  );
};
