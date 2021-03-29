import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonsLayer from "./ButtonsLayer";
import Resize from "./Resize";
import TextInputLayer from "./TextInputLayer";

const Container = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  position: relative;
  width: 15rem;
  height: 15rem;
  border: 0.03rem solid black;
`;

const InteractiveCell = ({
  initialValue,
  value,
  onChange,
  onHover,
  onAdjustStart,
  onAdjustEnd,
}) => {
  const maxValue = 40;
  const [internalValue, setInternalValue] = useState(initialValue);
  // const [forceStopAdjustment, setForceStopAdjustment] = useState(false);

  useEffect(() => {
    value && setInternalValue(value);
  }, [value]);

  const handleChange = (evt, val) => {
    !value && setInternalValue(val);
    onChange(evt, val);
  };

  const handleAdjustStart = (height, maxHeight) => {
    // setForceStopAdjustment(false);
    onAdjustStart(height, maxHeight);
  };

  const handleAdjustEnd = (height, maxHeight) => {
    let calculedValue = Math.round((height / maxHeight) * maxValue);

    handleChange(null, calculedValue);
    onAdjustEnd(height, maxHeight);
  };

  const handleMouseLeave = (evt) => {
    // setForceStopAdjustment(true);
  };

  return (
    <Container onMouseEnter={onHover} onMouseLeave={handleMouseLeave}>
      {/* <ButtonsLayer /> */}
      <Resize
        value={internalValue}
        maxValue={maxValue}
        onAdjustStart={handleAdjustStart}
        onAdjustEnd={handleAdjustEnd}
        // forceStop={forceStopAdjustment}
      />
      {/* <TextInputLayer initialValue={5} /> */}
    </Container>
  );
};

InteractiveCell.defaultProps = {
  initialValue: 0,
  value: 0,
  onChange: () => {},
  onHover: () => {},
  onAdjustStart: () => {},
  onAdjustEnd: () => {},
};

InteractiveCell.propTypes = {
  initialValue: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  onHover: PropTypes.func,
  onAdjustStart: PropTypes.func,
  onAdjustEnd: PropTypes.func,
};

export default InteractiveCell;
