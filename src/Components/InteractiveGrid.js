import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import InteractiveCell from "./InteractiveCell";

const Wrapper = styled.div`
  display: flex;
`;

const initialValues = [15, 20, 25, 30, 35];

const InteractiveGrid = () => {
  const [values, setValues] = useState(initialValues);
  const [currentIndex, setCurrentIndex] = useState();
  const [adjusting, setAdjusting] = useState(false);

  const handleChange = (evt, val, index) => {
    setValues(values.map((v, i) => (i !== index ? v : val)));
  };
  const handleHover = (evt, index) => {
    console.log("update");
    if (adjusting && index !== currentIndex)
      setValues(values.map((v, i) => (i !== index ? v : values[currentIndex])));

    setCurrentIndex(index);
  };
  const handleAdjustStart = (height, maxHeight) => {
    setAdjusting(true);
  };
  const handleAdjustEnd = (height, maxHeight) => {
    setAdjusting(false);
  };

  return (
    <Wrapper>
      {values.map((val, index) => (
        <InteractiveCell
          key={index}
          value={val}
          onChange={(e, v) => handleChange(e, v, index)}
          onHover={(e, val) => handleHover(e, index)}
          onAdjustStart={(h, mh) => handleAdjustStart(h, mh)}
          onAdjustEnd={(h, mh) => handleAdjustEnd(h, mh)}
        />
      ))}
    </Wrapper>
  );
};

InteractiveGrid.propTypes = {};

export default InteractiveGrid;
