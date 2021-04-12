import { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import ToggleContainer from "../functional/ToggleContainer";
import EmployeeSummary from "./EmployeeSummary";
import Client from "./Client";
import EmployeeGrupedProjectsMock from "../../mocks/EmployeeGrupedProjectsMock";
import {
  groupBy,
  flattenDeep,
  sumBy,
  map as mapLodash,
  value as lodashValue,
  constant,
} from "lodash";

const Employee = ({ data }) => {
  const [summary, setSummary] = useState(data.summary);
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

  const handleClientAllocationsChange = (
    event,
    clientCode,
    jobCode,
    index,
    value
  ) => {
    let copiedDetails = [...details];

    const clientIndex = copiedDetails.findIndex(
      (client) => client.code === clientCode
    );

    const projectIndex = copiedDetails[clientIndex].projects.findIndex(
      (project) => project.jobCode === Number(jobCode)
    );

    let projects = copiedDetails[clientIndex].projects;

    let allocations = projects[projectIndex].allocations;

    allocations[index] = {
      ...allocations[index],
      value: value,
    };

    projects[projectIndex] = {
      ...projects[projectIndex],

      allocations: allocations,
    };

    copiedDetails[clientIndex] = {
      ...copiedDetails[clientIndex],

      projects: projects,
    };

    setDetails(copiedDetails);

    let allocationsSummary = copiedDetails.map((client) =>
      client.projects.map((project) => project.allocations)
    );

    allocationsSummary = flattenDeep(allocationsSummary);

    allocationsSummary = groupBy(allocationsSummary, "id");

    let updatedSummary = mapLodash(allocationsSummary, (allocation, id) => ({
      id: id,
      allocatedHours: sumBy(allocation, "value"),
    }));
    let aux = summary.map((item) => ({
      ...item,
      allocatedHours: updatedSummary.find((item2) => item2.id == item.id)
        .allocatedHours,
    }));
    setSummary(aux);
  };

  return (
    <>
      <ToggleContainer
        Header={<EmployeeSummary employee={data} data={summary} />}
        onToggleVisibility={handleToggleVisibility}
      >
        {details &&
          details.map((client, index) => (
            <Client
              key={index}
              clientName={client.name}
              clientCode={client.code}
              projects={client.projects}
              onChange={(event, clientCode, jobCode, index, value) =>
                handleClientAllocationsChange(
                  event,
                  clientCode,
                  jobCode,
                  index,
                  value
                )
              }
            />
          ))}
      </ToggleContainer>
    </>
  );
};

Employee.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Employee;
