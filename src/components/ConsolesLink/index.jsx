import './styles.css';
import { ConsoleLink } from '../ConsoleLink';

export const ConsolesLink = () => {
  const games = [
    {
      id: '0',
      name: 'ps4',
      image: 'ps4',
    },
    {
      id: '1',
      name: 'Steam',
      image: 'steam',
    },
    {
      id: '2',
      name: 'XboxOne',
      image: 'xboxOne',
    },
  ];

  return (
    <div className="links-console">
      {games.map((c) => {
        return <ConsoleLink key={c.id} name={c.name} image={c.image} />;
      })}
    </div>
  );
};
