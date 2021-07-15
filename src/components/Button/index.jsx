import PropTypes from 'prop-types';
export const Button = (props) => {
  const { text } = props;
  return (
    <button {...props} type="button" className="action-button">
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string,
};
