import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Verdana, 'sans-serif';
    font-size: 1rem;
    color: #26262a;
    a {
      text-decoration: none;
      color: #26262a;
      img {
        width:100%;
      }
    }
  }
`;
export default GlobalStyles;
