import { createGlobalStyle } from "styled-components";

const AllocationStyle = createGlobalStyle`
  .level-right-1 {
  }

  .toggle-container{
    // background-color: red;
    border-bottom: 0.01rem solid black;
  }

  .employee-summary
  {}

  // .employee-summary .row
  // {
  //   border-bottom: 1px solid black;
  // }

  .employee-summary .pill-col{
    height: 5rem;
  }

  .project-container {
  }

  .project-row{
    height: 5rem;
  }

  .allocations{
    height: 100%;
  }
  
  .allocations-row{
    height: 100%;
  }

  .allocation-cell{
    height: 100%;
  }

  .allocation-interactive-cell{
    height: 100%;    
    width: 100%;
  }

  .toggle-container input[type="button"]{
    
  }

  .colum{
    border:1px solid black;
    height: 25px;
    
  }
`;

export default AllocationStyle;
