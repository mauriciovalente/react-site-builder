import { SocialMedia } from '../SocialMedia';
import './styles.css';

export const Social = () => {
  const social = [
    {
      name: 'Twitter',
      url: 'http://twitter.com',
      img: '../../logo.svg',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      img: '../../logo.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      img: '../../logo.svg',
    },
  ];
  return (
    <div className="social-media">
      {social.map((media) => {
        return <SocialMedia key={media.name} name={media.name} url={media.url} img={media.img} />;
      })}
    </div>
  );
};
