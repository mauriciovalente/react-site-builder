import PropTypes from 'prop-types';

export const ImageLink = (props) => {
  const { url, image, title, className } = props;
  return (
    <a href={url} className={className}>
      <img src={image} alt={title} />
    </a>
  );
};
ImageLink.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};
