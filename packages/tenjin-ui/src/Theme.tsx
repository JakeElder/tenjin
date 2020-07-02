import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import "reset-css";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Fantasque Sans Mono';
    src: 
      local("Fantasque Sans Mono Regular"),
      url(${require("../fonts/fantasque-sans-mono/FantasqueSansMono-Regular.woff2")});
  }
  @font-face {
    font-family: 'Fantasque Sans Mono';
    font-weight: 700;
    src: 
      local("Fantasque Sans Mono Bold"),
      url(${require("../fonts/fantasque-sans-mono/FantasqueSansMono-Bold.woff2")});
  }
`;

const theme = {};

const BaseStyles = styled.div`
  font-family: "Fantasque Sans Mono";
`;

const Theme: React.FC<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BaseStyles>{children}</BaseStyles>
    </ThemeProvider>
  );
};

export default Theme;
