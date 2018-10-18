import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'maiposans-semibold';
    src: url('/static/maiposans-semibold-webfont.woff') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'maiposans-semibold';
  }
  button {  font-family: 'maiposans-semibold'; }
`;

export default GlobalStyle;
