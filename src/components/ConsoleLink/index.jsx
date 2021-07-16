import PropTypes from "prop-types";
import "./styles.css";

export const ConsoleLink = (props) => {
  const { image, name } = props;
  return <img className="console-link" src={image} alt={name} />;
};

ConsoleLink.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
