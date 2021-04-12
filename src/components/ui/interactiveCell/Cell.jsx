import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Resizable,
  StyledButtonsLayer,
  StyledInputLayer,
  StyledScale,
  Container,
} from "./Styles";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const Cell = ({
  value,
  onChange,
  onHover,
  onMouseDown,
  onAdjustStart,
  onAdjustEnd,
  dragged,
  id,
  maxValue,
  minValue,
  resize,
  showFill,
  stepValue,
}) => {
  const [typing, setTyping] = useState(false);
  // console.log("id", id);

  const getCappedValue = (val) => Math.min(Math.max(val, minValue), maxValue);
  const getCalculatedValue = (height, maxHeight) =>
    Math.round((height / maxHeight) * maxValue);

  const changeValue = (event, val) => {
    onChange(event, getCappedValue(val), id);
  };

  const handleAdjustStart = (height, maxHeight) => {
    onAdjustStart();
  };

  const handleAdjustEnd = (height, maxHeight) => {
    let calculatedValue = getCalculatedValue(height, maxHeight);
    calculatedValue = Math.round(calculatedValue / stepValue) * stepValue;
    calculatedValue = getCappedValue(calculatedValue);

    onAdjustEnd(calculatedValue);
  };

  const handleAdjusting = (height, maxHeight) => {
    changeValue(null, getCalculatedValue(height, maxHeight));
  };

  const handleClickAway = (event) => {
    setTyping(false);
  };

  const handleClick = (event) => {
    setTyping((prev) => !prev);
  };

  const handleArrowUp = (event) => {
    changeValue(event, Number(value) + 1);
    event.stopPropagation();
  };

  const handleArrowDown = (event) => {
    changeValue(event, Number(value) - 1);
    event.stopPropagation();
  };

  const handleMouseEnter = (event) => {
    onHover(event);
  };

  const handleMouseLeave = (event) => {
    // setTyping(false);
  };

  const handleInputClick = (event) => {
    setTyping(true);
  };

  return (
    // <ClickAwayListener onClickAway={handleClickAway}>
    <Container
      onMouseEnter={(event) => handleMouseEnter(event)}
      onMouseLeave={(event) => handleMouseLeave(event)}
      onMouseDown={onMouseDown}
      onClick={handleClick}
      typing={typing && !dragged}
      dragged={dragged}
      className="allocation-interactive-cell"
    >
      <StyledScale show={dragged} divisions={5} />
      {!typing && (
        <Resizable
          value={value}
          maxValue={maxValue}
          onAdjustStart={handleAdjustStart}
          onAdjustEnd={handleAdjustEnd}
          onAdjusting={handleAdjusting}
          dragged={dragged}
          id={id}
          resize={resize}
          showFill={showFill}
          stepValue={stepValue}
        />
      )}
      <StyledButtonsLayer
        onClickArrowUp={handleArrowUp}
        onClickArrowDown={handleArrowDown}
        disableUp={value === maxValue}
        disableDown={!value}
      />
      <StyledInputLayer
        value={value}
        onClick={(event) => handleInputClick(event)}
        // onClick={()=>{setTyping(true)}}
        onChange={(event) => changeValue(event, event.target.value)}
        editable={typing}
      />
    </Container>
    // </ClickAwayListener>
  );
};

Cell.defaultProps = {
  value: 0,
  minValue: 0,
  maxValue: 40,
  stepValue: 1,
  onChange: () => {},
  onHover: () => {},
  onAdjustStart: () => {},
  onAdjustEnd: () => {},
};

Cell.propTypes = {
  value: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
  onHover: PropTypes.func,
  onAdjustStart: PropTypes.func,
  onAdjustEnd: PropTypes.func,
};

export default Cell;
