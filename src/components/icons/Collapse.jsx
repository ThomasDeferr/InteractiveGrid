import PropTypes from "prop-types";

const Collapse = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="8" stroke="#5F636D" />
      <line x1="5" y1="9.03369" x2="13" y2="9.03369" stroke="#5F636D" />
    </svg>
  );
};

Collapse.defaultProps = {
  width: 18,
  height: 18,
};

Collapse.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Collapse;
