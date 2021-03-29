import { useEffect, useRef, useState } from "react";
import { ResizableBox } from "react-resizable";
import styled from "styled-components";
import { Container } from "../Styles/styles";

const cellHandleHeight = 6;
const StyledContainer = styled(Container)`
  display: flex;
  align-items: flex-end;
`;
const HandleComponent = styled.div`
  position: relative;
  width: 100%;
  height: ${cellHandleHeight + "px"};
  background: transparent;
  &:hover {
    background: blue;
    cursor: pointer;
  }
`;
const StyledResizableBox = styled(ResizableBox)`
  position: relative;
  background: ${(props) => (props.actualheight == 0 ? "gray" : "lightblue")};
`;

const Resize = ({ value, maxValue, onAdjustStart, onAdjustEnd, forceStop }) => {
  const containerRef = useRef();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [cellHeight, setCellHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, [containerRef]);

  useEffect(() => {
    setCellHeight((containerSize.height / maxValue) * value);
  }, [containerSize, value, maxValue]);

  // useEffect(() => {
  //   forceStop && onAdjustEnd(cellHeight, containerSize.height);
  // }, [forceStop]);

  const handleResizeStart = (event, data) => {
    onAdjustStart(cellHeight, containerSize.height);
  };
  const handleResizeStop = (event, data) => {
    onAdjustEnd(cellHeight, containerSize.height);
  };
  const handleResize = (event, data) => {
    setCellHeight(data.size.height - cellHandleHeight);
  };

  return (
    <StyledContainer ref={containerRef}>
      <StyledResizableBox
        width={containerSize.width}
        height={cellHandleHeight + cellHeight}
        minConstraints={[containerSize.width, cellHandleHeight]}
        maxConstraints={[containerSize.width, containerSize.height]}
        axis="y"
        resizeHandles={["n"]}
        handle={<HandleComponent></HandleComponent>}
        onResizeStart={handleResizeStart}
        onResizeStop={handleResizeStop}
        onResize={handleResize}
      >
        <>
          <span style={{ position: "absolute", bottom: 15 }}>
            Height: {cellHeight}
          </span>
          <span style={{ position: "absolute", bottom: 0 }}>
            Value: {value}
          </span>
        </>
      </StyledResizableBox>
    </StyledContainer>
  );
};

export default Resize;
