import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "../Styles/styles";

const StyledContainer = styled(Container)`
  position: absolute;
`;

const TextInputLayer = ({ initialValue }) => {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleClick = (e) => {
    setEditable(!editable);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    setEditable(false);
  };

  return (
    <StyledContainer onClick={(e) => handleClick(e)}>
      {editable ? (
        <input type="number" value={value} onChange={(e) => handleChange(e)} />
      ) : (
        <span>{value}</span>
      )}
    </StyledContainer>
  );
};

TextInputLayer.propTypes = {};

export default TextInputLayer;
