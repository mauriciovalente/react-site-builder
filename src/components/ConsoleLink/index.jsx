import PropTypes from 'prop-types';

export const ConsoleLink = (props) => {
  const { image, name } = props;
  return <img src={image} alt={name} />;
};

ConsoleLink.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
