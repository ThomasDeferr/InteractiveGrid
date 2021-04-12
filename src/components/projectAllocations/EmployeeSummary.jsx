import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Pill from "../ui/Pill";
import Profile from "../ui/Profile";

const EmployeeSummary = ({ employee, data }) => {
  return (
    <Container fluid>
      <Row noGutters className="align-items-center">
        <Col xs="3">
          <Profile
            key={employee.id}
            name={employee.name}
            title={employee.title}
            location={employee.location}
            profileImageURL={employee.profileImageURL}
            freelance={employee.freelance}
          />
        </Col>
        {data.map((item) => (
          <Col key={item.id} className="h-100 border-left border-right">
            <Pill
              availableHours={item.availableHours}
              allocatedHours={item.allocatedHours}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

EmployeeSummary.propTypes = {
  employee: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EmployeeSummary;
