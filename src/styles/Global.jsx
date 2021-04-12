import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;  
    font-family: 'HelveticaNeueW01-45Ligh', helvetica, sans-serif;
    font-size: medium;
    font-weight: 300;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0.35rem;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #A3A6AB; 
    border-radius: 0.15rem;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #A3A6AB; 
  }

  h1, h2, h3, h4, h5, h6, b, strong {
    font-family: 'HelveticaNeueW01-65Medi', helvetica, sans-serif;
  }

  #mti_wfs_colophon {
    display: none;
    visibility: hidden;
  }

  /* Modal */
  .modal-dialog {
    max-width: 95%;
  }
  .modal-header {
    border-bottom: 0;
  }
  .modal-footer {
    border-top: 0;
  }
  .modal-body {
    padding: 0;
    overflow: auto;
  }
  
  /* Animation: Slide up and down */
  .slide-up, .slide-down {
    max-height: 0;            
    overflow-y: hidden;
    /* -webkit-transition: max-height 1.0s ease-in-out;
    -moz-transition: max-height 1.0s ease-in-out;
    -o-transition: max-height 1.0s ease-in-out;
    transition: max-height 1.0s ease-in-out; */
  }
  .slide-down {            
    max-height: 2000px;                    
  }

  /* Form input */
  input[type=checkbox], input[type=radio] {
    cursor: pointer;
  }
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
