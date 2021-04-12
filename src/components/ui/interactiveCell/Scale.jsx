import styled from "styled-components";
import PropTypes from "prop-types";
import "../../../configs/Global";

const ScaleContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
    display: ${(props) => (props.show ? "flex" : "none")};
`;

const ScaleLine = styled.div`
    border-top: 0.04em solid #dadbde;
    width: 0.25rem;
    &:first-child {
        border-top: none;
    }
    &:last-child {
        border-top: none;
    }
`;

const Scale = ({ show, divisions, ...props }) => {
    return (
        <ScaleContainer show={show} className={props.className}>
            {Array.from(Array(divisions), (e, i) => {
                return <ScaleLine key={i} />;
            })}
        </ScaleContainer>
    );
};

Scale.propTypes = {
    show: PropTypes.bool,
    divisions: PropTypes.number,
};

Scale.defaultProps = {
    show: false,
    divisions: 3,
};

export default Scale;
