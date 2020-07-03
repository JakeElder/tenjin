import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import "reset-css";
import styledComponentsRhythm from "@ceteio/styled-components-rhythm";
import Rhythm from "./Rhythm";

const rhythm = styledComponentsRhythm({
  baseFontSize: 1,
  defaultLineHeight: 1,
  baseLineHeight: 1.2,
  rhythmHeight: 0.5, // 16px * 0.75rem == 12px
  capHeights: {
    // Calculated with https://codepen.io/sebdesign/pen/EKmbGL?editors=0011
    Fantasque: 0.72,
  },
  debug: true,
});

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Fantasque';
    src: 
      local("Fantasque Sans Mono Regular"),
      url(${require("../fonts/fantasque-sans-mono/FantasqueSansMono-Regular.woff2")});
  }

  @font-face {
    font-family: 'Fantasque';
    font-weight: 700;
    src: 
      local("Fantasque Sans Mono Bold"),
      url(${require("../fonts/fantasque-sans-mono/FantasqueSansMono-Bold.woff2")});
  }

  ${rhythm.global}
`;

const theme = rhythm.theme;

const BaseStyles = styled.div`
  font-family: "Fantasque";
  font-family: "Lato";
`;

function Theme({ children }: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BaseStyles>{children}</BaseStyles>
      <Rhythm show={false} />
    </ThemeProvider>
  );
}

export default Theme;
