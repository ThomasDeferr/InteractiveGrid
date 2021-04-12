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
    // console.log(
    //   "[employee]",
    //   "clientCode",
    //   clientCode,
    //   "jobCode",
    //   jobCode,
    //   "index",
    //   index,
    //   " value",
    //   value
    // );

    // let copiedDetails = [...details];

    // const clientIndex = copiedDetails.findIndex(
    //   (client) => client.code === clientCode
    // );

    // const projectIndex = copiedDetails[clientIndex].projects.findIndex(
    //   (project) => project.jobCode === Number(jobCode)
    // );

    // let projects = copiedDetails[clientIndex].projects;

    // let allocations = projects[projectIndex].allocations;

    // console.log("projects 1", projects);

    // console.log("allocations 1", allocations);

    // allocations[index] = {
    //   ...allocations[index],

    //   value: value,
    // };

    // projects[projectIndex] = {
    //   ...projects[projectIndex],

    //   allocations: allocations,
    // };

    // copiedDetails[clientIndex] = {
    //   ...copiedDetails[clientIndex],

    //   projects: projects,
    // };

    // let allocationsSummary = -copiedDetails.map((client) =>
    //   client.projects.map((project) => project.allocations)
    // );

    // console.log("allocationsSummary 1", allocationsSummary);

    // allocationsSummary = flattenDeep(allocationsSummary);

    // allocationsSummary = groupBy(allocationsSummary, "id");

    // console.log("allocationsSummary", allocationsSummary);
    // // setSummary("newSummary", summary);
    // let summary = mapLodash(allocationsSummary, (allocation, id) => ({
    //   id: id,
    //   value: sumBy(allocation, "value"),
    // }));

    // let newSummary = [...summary];

    // newSummary = summary.map((element) => ({
    //   ...element,

    //   allocatedHours: summary.find(
    //     (e) => Number(e.id) === Number(element.weekNumber)
    //   ).value,
    // }));

    // console.log("newSummary", newSummary);

    // setSummary(...summary);

    // setTest("Hola mundo!");
    let test = [...summary];
    test[index].allocatedHours = value;
    console.log(test);
    setSummary(test);
  };

  return (
    <>
      <ToggleContainer
        Header={<EmployeeSummary employee={data} data={summary} />}
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
        </Container>
      </ToggleContainer>
    </>
  );
};

Employee.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Employee;
