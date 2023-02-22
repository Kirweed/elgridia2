import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    padding: 0;

    button {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default GlobalStyle;
