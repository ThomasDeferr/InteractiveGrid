import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import ToggleContainer from "../functional/ToggleContainer";
import ClientHeader from "./ClientHeader";
import Project from "./Project";

const Client = ({ clientCode, clientName, projects, onChange }) => {
  const handleProjectAllocationsChange = (
    event,
    clientCode,
    jobCode,
    index,
    value
  ) => {
    onChange(event, clientCode, jobCode, index, value);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs="1" />
          <Col>
            <ToggleContainer Header={<ClientHeader clientName={clientName} />}>
              <div className="w-100">
                {projects &&
                  projects.map((project) => (
                    <Project
                      key={project.id}
                      data={project}
                      onChange={(event, jobCode, index, value) =>
                        handleProjectAllocationsChange(
                          event,
                          clientCode,
                          jobCode,
                          value,
                          index
                        )
                      }
                    />
                  ))}
              </div>
            </ToggleContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Client.defaultProps = {
  clientCode: null,
  clientName: "",
  projects: [],
};

Client.propTypes = {
  clientCode: PropTypes.number,
  clientName: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default Client;
