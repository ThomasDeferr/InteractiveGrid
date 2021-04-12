import { useEffect, useRef, useState } from "react";
import { ResizableBox } from "react-resizable";
import styled from "styled-components";
import "../../../configs/Global";

const cellHandleHeight = 6;

const StyledContainer = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
`;

const HandleIcon = styled.div`
    position: absolute;
    top: -11px;
    left: ${(props) => (props.position ? props.position.x + "px" : "0px")};
    z-index: 2;
    display: ${(props) => (props.show ? "block" : "none")};
`;

const Handle = styled.div`
    position: relative;
    width: 100%;
    height: ${cellHandleHeight + "px"};
    background-color: ${(props) =>
        props.show ? global.config.colors.blue2 : "transparent"};
    &:hover {
        background-color: ${global.config.colors.blue2};
        cursor: row-resize;

        ${HandleIcon} {
            display: block;
        }
    }
`;

const StyledResizableBox = styled(ResizableBox)`
    position: relative;
    background-color: ${(props) =>
        props.showFill
            ? props.value > 0
                ? global.config.colors.blue3
                : global.config.colors.gray6
            : "transparent"};
`;

const Resize = ({
    id,
    value,
    maxValue,
    onAdjustStart,
    onAdjustEnd,
    onAdjusting,
    dragged,
    resize,
    showFill,
    ...props
}) => {
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
        !resize && setCellHeight((containerSize.height / maxValue) * value);
    }, [containerSize, value, maxValue, resize]);

    const handleResizeStart = (event, data) => {
        onAdjustStart(cellHeight, containerSize.height);
        event.stopPropagation();
    };
    const handleResizeStop = (event, data) => {
        onAdjustEnd(cellHeight, containerSize.height);
    };
    const handleResize = (event, data) => {
        let h = data.size.height - cellHandleHeight;
        setCellHeight(h);
        onAdjusting(h, containerSize.height);

        event.stopPropagation();
    };

    const handleClick = (event) => {
        event.stopPropagation();
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
                handle={<Handle show={dragged} onClick={handleClick} />}
                onResizeStart={handleResizeStart}
                onResizeStop={handleResizeStop}
                onResize={handleResize}
                draggableOpts={{ scale: 1 }}
                value={value}
                showFill={showFill}
            />
        </StyledContainer>
    );
};

export default Resize;
