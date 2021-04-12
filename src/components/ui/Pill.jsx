import PropTypes from "prop-types";
import styled from "styled-components";
import "../../configs/Global";

const PillWrapper = styled.div`
  background-color: ${(props) => (props.color ? props.color : "transparent")};
  border-radius: 3rem;
  padding: 0.2rem 0.3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  max-width: 70px;
  width: 50%;
  height: 100%;
`;

const PillContent = styled.div`
  display: flex;
`;
const PillPipe = styled.div`
  width: 0.05rem;
  height: 0.43rem;
  background-color: ${(props) => props.color};
  margin: auto 0.325rem;
`;

const allocationStatusPercentages = {
  notAllocated: 0,
  underAllocated: 30,
  correctAllocated: 100,
  overallocated: 130,
};

const Pill = ({ allocatedHours, availableHours }) => {
  const calculateColor = () => {
    if (!allocatedHours || !availableHours || availableHours === 0)
      return global.config.colors.blue5;

    let allocatedPercentage = (allocatedHours / availableHours) * 100;

    if (allocatedPercentage === allocationStatusPercentages.notAllocated)
      return global.config.colors.blue2;
    if (allocatedPercentage <= allocationStatusPercentages.underAllocated)
      return global.config.colors.blue3;
    if (allocatedPercentage < allocationStatusPercentages.correctAllocated)
      return global.config.colors.blue4;
    if (allocatedPercentage === allocationStatusPercentages.correctAllocated)
      return global.config.colors.blue5;
    if (allocatedPercentage < allocationStatusPercentages.overallocated)
      return global.config.colors.orange3;
    else return global.config.colors.orange2;
  };

  return (
    <PillWrapper color={calculateColor()}>
      <PillContent>
        <span>{allocatedHours ?? "-"}</span>
        <PillPipe color={global.config.colors.grey} />
        <span>{availableHours ?? "-"}</span>
      </PillContent>
    </PillWrapper>
  );
};

Pill.defaultProps = {
  allocatedHours: 0,
  availableHours: 0,
};

Pill.propTypes = {
  allocatedHours: PropTypes.number,
  availableHours: PropTypes.number,
};

export default Pill;
