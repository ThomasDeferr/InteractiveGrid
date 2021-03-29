import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "../Styles/styles";
import ArrowDown from "../Icons/ArrowDown";
import ArrowUp from "../Icons/ArrowUp";
import Button from "react-bootstrap/Button";

const StyledContainer = styled(Container)`
  position: absolute;
`;
const ContainerWrapper = styled(Container)`
  position: relative;
`;
const WrapperArrows = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
const StyledButton = styled(Button)`
  width: 25px;
  height: 25px;
  padding: 0;
`;

const ButtonsLayer = ({ handleArrowUp, handleArrowDown }) => {
  return (
    <StyledContainer>
      <ContainerWrapper>
        <WrapperArrows>
          <StyledButton onClick={(e) => handleArrowUp(e)}>
            <ArrowUp />
          </StyledButton>
          <StyledButton onClick={(e) => handleArrowDown(e)}>
            <ArrowDown />
          </StyledButton>
        </WrapperArrows>
      </ContainerWrapper>
    </StyledContainer>
  );
};

ButtonsLayer.propTypes = {};

export default ButtonsLayer;
