import P from 'prop-types';
import { TranslationContext } from './context';
import { useContext, useReducer, useRef } from 'react';
import { translationHomeReducer } from './reducer';
import { data } from './data';
import { actionFactory } from './action-factory';

export const TranslationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(translationHomeReducer, data);
  const actions = useRef(actionFactory(dispatch));

  return <TranslationContext.Provider value={[state, actions.current]}>{children}</TranslationContext.Provider>;
};

TranslationProvider.propTypes = {
  children: P.node.isRequired,
};

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useTranslationHomeContext inside <TranslationHomeContextProvider/>');
  }
  return [...context];
};
