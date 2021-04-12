import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import Collapse from "../icons/Collapse";
import Expand from "../icons/Expand";

const ToggleContainer = ({ Header, children, onToggleVisibility }) => {
  const [hidden, setHidden] = useState(true);

  const handleToggleVisibility = () => {
    const newValue = !hidden;
    setHidden(newValue);
    onToggleVisibility(newValue);
  };

  return (
    <Container fluid className="m-0 p-0 toggle-container">
      <Row noGutters className="align-items-center">
        <Col xs="auto">
          <Button
            variant="link"
            size="sm"
            className="m-0 p-0"
            onClick={handleToggleVisibility}
          >
            {hidden ? <Expand /> : <Collapse />}
          </Button>
        </Col>
        <Col>{Header}</Col>
      </Row>
      <Row noGutters>
        <Col>
          <div className={hidden ? "slide-up" : "slide-down"}>{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

ToggleContainer.defaultProps = {
  onToggleVisibility: () => {},
};

ToggleContainer.propTypes = {
  Header: PropTypes.element.isRequired,
  onToggleVisibility: PropTypes.func,
};

export default ToggleContainer;
