import styled from "styled-components";
import PropTypes from "prop-types";
import "../../../configs/Global";

const Input = styled.input`
  text-align: center;
  width: 100%;
  border: none;
  background: transparent;
  font-size: 0.85rem;
  font-family: "HelveticaNeueW01-75Bold";
  -moz-appearance: textfield;
  padding: 0;
  margin: 0;
  user-select: none;
  cursor: pointer;
  user-select: none;

  &:focus {
    outline: none;
    user-select: none;
  }
`;

const InputLayer = ({
  onChange,
  onClick,
  value,
  editable,
  color,
  ...props
}) => {
  const handleKeyDown = (event) => {
    const allowedValues = /^(\s*|\d+)$/;
    !event.target.value.match(allowedValues) && event.preventDefault();
  };
  const handleChange = (event) => onChange(event);
  const handleFocus = (event) => event.target.select();

  return (
    <div className={props.className}>
      {editable ? (
        <Input
          type="number"
          style={{ color: color }}
          value={value || "--"}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onFocus={handleFocus}
          autoFocus
          placeholder="--"
        />
      ) : (
        <span>{value === 0 ? "--" : value}</span>
      )}
    </div>
  );
};

InputLayer.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default InputLayer;
