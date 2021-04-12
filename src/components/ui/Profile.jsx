import PropTypes from "prop-types";
import styled from "styled-components";
import Dotdotdot from "react-dotdotdot";
import { Container, Row, Col } from "react-bootstrap";

const ProfilePicture = styled.img`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
`;

const Profile = ({ name, title, location, imageURL, freelance }) => {
  return (
    <Container fluid>
      <Row noGutters className="align-items-center">
        <Col xs="auto">
          <ProfilePicture src={imageURL} />
        </Col>
        <Col>
          <div>
            <span>{name}</span>
            {freelance && <span>F</span>}
          </div>
          <Dotdotdot clamp={1}>
            <span>{title}</span>
          </Dotdotdot>
          <Dotdotdot clamp={1}>
            <span>{location}</span>
          </Dotdotdot>
        </Col>
      </Row>
    </Container>
  );
};

Profile.defaultProps = {
  imageURL: "",
  freelance: false,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  freelance: PropTypes.bool,
};

export default Profile;
