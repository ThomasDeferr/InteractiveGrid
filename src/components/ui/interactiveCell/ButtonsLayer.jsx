import React from "react";
import styled from "styled-components";
import ArrowUp from "../../icons/ArrowUp";
import ArrowDown from "../../icons/ArrowDown";

const StyledButton = styled.button`
    background-color: inherit;
    border: none;
    padding: 0;
    &:hover {
        background-color: inherit;
        border: none;
        box-shadow: none;
        outline: none;
        cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
    }
    &:active {
        background-color: ${global.config.colors.orange1};
        border: none;
        box-shadow: none;
        outline: none;
    }
    &:focus {
        background-color: inherit;
        border: none;
        box-shadow: none;
        outline: none;
        outline: none;
    }
`;

const ButtonsLayer = ({
    onClickArrowUp,
    onClickArrowDown,
    disableUp,
    disableDown,
    ...props
}) => {
    return (
        <div className={props.className}>
            <StyledButton onClick={onClickArrowUp} disable={disableUp}>
                <ArrowUp color={global.config.colors.gray2} />
            </StyledButton>
            <StyledButton onClick={onClickArrowDown} disable={disableDown}>
                <ArrowDown color={global.config.colors.gray2} />
            </StyledButton>
        </div>
    );
};

ButtonsLayer.propTypes = {};

export default ButtonsLayer;
