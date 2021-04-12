import { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import ToggleContainer from "../functional/ToggleContainer";
import EmployeeSummary from "./EmployeeSummary";
import Client from "./Client";
import EmployeeGrupedProjectsMock from "../../mocks/EmployeeGrupedProjectsMock";

const Employee = ({ data }) => {
  const [details, setDetails] = useState([]);

  const fetchDetails = async () => {
    const fetchedData = EmployeeGrupedProjectsMock;
    return fetchedData;
  };

  const handleToggleVisibility = async (hidden) => {
    if (!hidden && !!details) {
      const detailsData = await fetchDetails();
      setDetails(detailsData);
    }
  };

  return (
    <>
      <ToggleContainer
        Header={<EmployeeSummary employee={data} data={data.summary} />}
        onToggleVisibility={handleToggleVisibility}
      >
        <Container fluid className="level-right-1">
          {details &&
            details.map((client, index) => (
              <Client
                key={index}
                clientName={client.name}
                clientCode={client.code}
                projects={client.projects}
              />
            ))}
        </Container>
      </ToggleContainer>
    </>
  );
};

Employee.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Employee;
