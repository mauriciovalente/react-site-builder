import './styles.css';

import ageLimit from '../../globe.png';

export const AgeLimit = () => {
  return (
    <img src={ageLimit} alt="Age Limit" height="60px" style={{ left: '20px', position: 'absolute', top: '45%' }} />
  );
};
