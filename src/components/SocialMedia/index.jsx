import PropTypes from 'prop-types';

import TempImage from '../../logo.svg';

export const SocialMedia = (props) => {
  const { name, url, img } = props;
  return (
    <a href={url}>
      <img src={TempImage} style={{ width: '32px' }} alt={name} />
    </a>
  );
};
SocialMedia.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  img: PropTypes.string,
};
