import React from "react";
import PropTypes from "prop-types";
import Dotdotdot from "react-dotdotdot";
import { Container, Row, Col } from "react-bootstrap";

const ClientHeader = ({ clientName }) => {
  return (
    <Dotdotdot clamp={1}>
      <span>{clientName}</span>
    </Dotdotdot>
  );
};

ClientHeader.defaultProps = {
  clientName: "",
};

ClientHeader.propTypes = {
  clientName: PropTypes.string.isRequired,
};

export default ClientHeader;
