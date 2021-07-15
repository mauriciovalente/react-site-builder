import './styles.css';

export const HMMLogo = (props) => {
  const logo = 'https://www.heavymetalmachines.com/site/content/themes/hoplon/assets/img/logo-hmm.png';
  return <img {...props} className="hmm-logo" src={logo} alt="Logo" />;
};
