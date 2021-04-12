import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";

const GridGroupHeader = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs="12">
          {/* <GroupContainer>
          <div>
            <ImageButton onClick={expandEmployees}>
              {!expanded ? <Expand /> : <Collapse />}
            </ImageButton>
          </div>
          <div style={{ marginTop: "0.2rem" }}>
            <Dotdotdot clamp={1}>
              <Text variant="small">{employees[0]["locationId"]}</Text>
            </Dotdotdot>
          </div>
        </GroupContainer> */}
        </Col>
      </Row>
    </Container>
  );
};

GridGroupHeader.propTypes = {};

export default GridGroupHeader;
