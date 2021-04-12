import PropTypes from "prop-types";
// import { groupBy } from "lodash";
import GridGroupHeader from "./GridGroupHeader";
import Employee from "./Employee";

const Grid = ({ data, groupBy }) => {
  // const dataGrouped = groupBy(data, groupBy);
  // const dataTransformed = Object.values(dataGrouped);

  return (
    <>
      <div className="w-100">
        {data &&
          data.map((employee, index) => (
            <Employee key={index} data={employee} />
          ))}
      </div>
    </>
  );
};

GridGroupHeader.defaultProps = {
  groupBy: "",
};

GridGroupHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  groupBy: PropTypes.string,
};

export default Grid;
