import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Allocations from "./Allocations";

const cellMaxValue = 40;
const cellStepValue = 8;

const Project = ({ data, onChange }) => {
  const handleCellValueChange = (event, jobCode, index, value) => {
    // console.log(
    //   "[project]",
    //   "jobCode",
    //   jobCode,
    //   "index",
    //   index,
    //   " value",
    //   value
    // );
    onChange(event, jobCode, value, index);
  };

  return (
    <Container fluid className="project-container">
      <Row className="project-row">
        <Col xs="2">
          <span>{data.name}</span>
        </Col>
        <Col>
          <Allocations
            data={data.allocations}
            cellMaxValue={cellMaxValue}
            cellStepValue={cellStepValue}
            onChange={(event, index, value) =>
              handleCellValueChange(event, data.jobCode, value, index)
            }
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
