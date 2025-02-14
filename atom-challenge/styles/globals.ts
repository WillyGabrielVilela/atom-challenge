import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background-color: ${({ theme }) => theme.colors["purple-bg"]};
  }

`

  
export default GlobalStyle;