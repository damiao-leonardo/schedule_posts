import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    background: #E5E5E5;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #F8F8F8;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
  button {
    cursor: pointer;
  }
`;
