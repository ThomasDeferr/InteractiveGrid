import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Allocations from "./Allocations";

const cellMaxValue = 40;
const cellStepValue = 8;

const Project = ({ data }) => {
  return (
    <Container fluid className="project-container">
      <Row>
        <Col xs="2">
          <span>{data.name}</span>
        </Col>
        <Col>
          <Allocations
            data={data.allocations}
            cellMaxValue={cellMaxValue}
            cellStepValue={cellStepValue}
          />
        </Col>
      </Row>
    </Container>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;
