import React from "react";
import PropTypes from "prop-types";
import Dotdotdot from "react-dotdotdot";

const ClientHeader = ({ clientName }) => {
  return (
    <div className="w-100">
      <Dotdotdot clamp={1}>
        <span>{clientName}</span>
      </Dotdotdot>
    </div>
  );
};

ClientHeader.defaultProps = {
  clientName: "",
};

ClientHeader.propTypes = {
  clientName: PropTypes.string.isRequired,
};

export default ClientHeader;
