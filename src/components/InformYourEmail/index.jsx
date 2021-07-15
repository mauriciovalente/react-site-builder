import { Button } from '../Button';
import './styles.css';

export const InformYourEmail = () => {
  const handleClick = () => {
    console.log('register email');
  };

  return (
    <div>
      <p>Saiba mais sobre nossas atualizações</p>
      <input type="email" name="email" maxLength="100" onClick={handleClick} />
      <Button text="Enviar" />
    </div>
  );
};
