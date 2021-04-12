import React from "react";
import Grid from "./Grid";
import EmployeesMock from "../../mocks/EmployeesMock";
import AllocationStyle from "../../styles/AllocationStyle";

const index = () => {
  const data = EmployeesMock.map((employee) => {
    return {
      ...employee,
      summary: employee.summary.slice(0, 6), // truncate summary
    };
  });

  return (
    <>
      <AllocationStyle />
      {/* <Filters /> */}
      <Grid data={data} groupBy="a" />
    </>
  );
};

export default index;
