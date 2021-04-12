import styled from "styled-components";
import ButtonsLayer from "./ButtonsLayer";
import Resize from "./Resize";
import InputLayer from "./InputLayer";
import Scale from "./Scale";

export const Resizable = styled(Resize)`
    display: none;
`;

export const StyledButtonsLayer = styled(ButtonsLayer)`
    position: absolute;
    bottom: 0.1rem;
    right: 0.1rem;
    width: auto;
    display: none;
`;

export const StyledInputLayer = styled(InputLayer)`
    position: absolute;
    bottom: 0.3rem;
    width: 2.5rem;
    left: calc(50% - 2.5rem / 2);
`;

export const StyledScale = styled(Scale)``;

export const Container = styled.div`
    padding: 0 0;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
        props.typing || props.dragged
            ? global.config.colors.gray9
            : "transparent"};
    border-bottom: ${(props) =>
        props.typing ? global.config.border.medium : "none"};

    &:hover {
        background-color: ${global.config.colors.gray9};
        cursor: pointer;

        ${StyledButtonsLayer} {
            display: ${(props) => (props.dragged ? "none" : "inline")};
        }

        ${StyledScale} {
            display: flex;
        }
    }
`;
