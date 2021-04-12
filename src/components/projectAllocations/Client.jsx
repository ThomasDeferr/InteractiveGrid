import PropTypes from "prop-types";
import ToggleContainer from "../functional/ToggleContainer";
import ClientHeader from "./ClientHeader";
import Project from "./Project";

const Client = ({ clientCode, clientName, projects }) => {
  return (
    <>
      <ToggleContainer Header={<ClientHeader clientName={clientName} />}>
        <div className="w-100">
          {projects &&
            projects.map((project) => (
              <Project key={project.id} data={project} />
            ))}
        </div>
      </ToggleContainer>
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
