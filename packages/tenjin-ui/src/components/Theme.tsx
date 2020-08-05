import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import "reset-css";

const globalCSS = css`
  @font-face {
    font-family: "Fantasque";
    src: local("Fantasque Sans Mono Regular"),
      url(${require("../fonts/fantasque-sans-mono/FantasqueSansMono-Regular.woff2")});
  }

  @font-face {
    font-family: "Fantasque";
    font-weight: 700;
    src: local("Fantasque Sans Mono Bold"),
      url(${require("../fonts/fantasque-sans-mono/FantasqueSansMono-Bold.woff2")});
  }
`;

const BaseStyles = styled.div`
  font-family: "Fantasque";
`;

const theme = {
  fontSizes: [".75rem", ".875rem", "1rem", "1.25rem", "1.5rem", "2rem"],
};

function Theme({ children }: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalCSS} />
      <BaseStyles>{children}</BaseStyles>
    </ThemeProvider>
  );
}

export default Theme;
