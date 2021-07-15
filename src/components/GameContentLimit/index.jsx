import './styles.css';

import gameContentLimit from '../../globe.png';

export const GameContentLimit = () => {
  return (
    <img
      src={gameContentLimit}
      alt="Everyone"
      height="60px"
      style={{ right: '20px', position: 'absolute', top: '45%' }}
    />
  );
};
