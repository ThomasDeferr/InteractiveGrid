import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
// import Cell from "../../../UI/InteractiveCell/Cell";
// import { Col } from "react-bootstrap";

// const AllocationColumn = styled(Col)(({ enabled }) => ({
//   backgroundColor: enabled ? global.config.colors.gray8 : "transparent",
//   borderRight: global.config.border.small,
//   padding: 0,
//   textAlign: "center",
//   height: "5.5rem",
// }));

const Allocations = ({ data, cellMaxValue, cellStepValue, onChange }) => {
  // const [cellsGraphicInfo, setCellsGraphicInfo] = useState([]);
  // const [adjusting, setAdjusting] = useState(false);

  // useEffect(() => {
  //   let behavior = {
  //     dragged: false,
  //     resize: false,
  //     showFill: true,
  //   };

  //   console.log(data);
  //   setCellsGraphicInfo(
  //     data.slice(0, weeklyView).map((cell) => ({
  //       ...cell,
  //       value: cell.value || 0,
  //       behavior,
  //     }))
  //   );
  // }, [weeklyView, data]);

  // const handleChange = (event, val, index) => {
  //   setCellsGraphicInfo(
  //     cellsGraphicInfo.map((cell, i) =>
  //       i === index || cell.behavior.dragged ? { ...cell, value: val } : cell
  //     )
  //   );

  //   onChange(event, val, index);
  // };

  // const handleHover = (event, index) => {
  //   if (adjusting) {
  //     const indexResizing = cellsGraphicInfo.findIndex(
  //       (cell) => cell.behavior.resize
  //     );

  //     setCellsGraphicInfo(
  //       cellsGraphicInfo.map((cell, i) => ({
  //         ...cell,
  //         behavior: {
  //           ...cell.behavior,
  //           dragged: indexResizing <= i && i <= index,
  //           showFill: i <= indexResizing || index < i,
  //         },
  //       }))
  //     );
  //   }
  // };
  // const handleAdjustStart = (index) => {
  //   setCellsGraphicInfo(
  //     cellsGraphicInfo.map((cell, i) => ({
  //       ...cell,
  //       behavior: {
  //         ...cell.behavior,
  //         resize: i === index,
  //       },
  //     }))
  //   );
  //   setAdjusting(true);
  // };

  // const handleAdjustEnd = (value, index) => {
  //   setCellsGraphicInfo(
  //     cellsGraphicInfo.map((cell, i) => ({
  //       ...cell,
  //       value: i === index || cell.behavior.dragged ? value : cell.value,
  //       behavior: {
  //         ...cell.behavior,
  //         resize: false,
  //       },
  //     }))
  //   );
  //   setAdjusting(false);
  // };

  // const handleMouseUp = (event) => {
  //   setCellsGraphicInfo(
  //     cellsGraphicInfo.map((cell) => ({
  //       ...cell,
  //       behavior: {
  //         ...cell.behavior,
  //         dragged: false,
  //         showFill: true,
  //       },
  //     }))
  //   );
  // };

  return (
    <></>
    // <Wrapper onMouseUp={handleMouseUp}>
    //   {cellsGraphicInfo.map((cell, index) => (
    //     <AllocationColumn key={index}>
    //       <Cell
    //         id={cell.id}
    //         value={cell.value}
    //         onChange={(event, value) => handleChange(event, value, index)}
    //         onHover={(event) => handleHover(event, index)}
    //         onAdjustStart={() => handleAdjustStart(index)}
    //         onAdjustEnd={(value) => handleAdjustEnd(value, index)}
    //         dragged={cell.behavior.dragged}
    //         maxValue={cellMaxValue}
    //         resize={cell.behavior.resize}
    //         showFill={cell.behavior.showFill}
    //         showScale={cell.behavior.dragged}
    //         stepValue={cellStepValue}
    //       />
    //     </AllocationColumn>
    //   ))}
    // </Wrapper>
  );
};

Allocations.propTypes = {};

export default Allocations;
