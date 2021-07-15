import './styles.css';
import { ImageLink } from '../ImageLink';

export const SocialShare = () => {
  const social = [
    {
      id: 0,
      name: 'vk',
      image: '../image.png',
    },
    {
      id: 1,
      name: 'facebook',
      image: '../image.png',
    },
    {
      id: 2,
      name: 'twitter',
      image: '../image.png',
    },
    {
      id: 3,
      name: 'youtube',
      image: '../image.png',
    },
    {
      id: 4,
      name: 'discord',
      image: '../image.png',
    },
    {
      id: 5,
      name: 'instagram',
      image: '../image.png',
    },
    {
      id: 6,
      name: 'twitch',
      image: '../image.png',
    },
  ];
  return (
    <div className="social-share">
      {social.map((s) => {
        return <ImageLink key={s.id} url={s.image} title={s.name} />;
      })}
    </div>
  );
};
