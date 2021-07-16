import PropTypes from "prop-types";

export const SpanLink = (props) => {
  const { url, text, title, className, target } = props;
  return (
    <a href={url} className={className} title={title} target={target}>
      <span>{text}</span>
    </a>
  );
};
SpanLink.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
};
