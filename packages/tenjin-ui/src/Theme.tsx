import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import "reset-css";
import styledComponentsRhythm from "@ceteio/styled-components-rhythm";
import Rhythm from "./Rhythm";
import capHeight from "cap-height/dist/cap-height";

if (process.env.GET_WEBFONT_CAPHEIGHT) {
  import("webfontloader").then((WebFont) => {
    WebFont.load({
      custom: {
        families: ["Fantasque"],
      },
      fontactive: capHeight.fontActive(console.log, "H"),
    });
  });
}

const rhythmHeight = 0.5;
const show = true;

const rhythm = styledComponentsRhythm({
  baseFontSize: 1,
  defaultLineHeight: 1.3,
  baseLineHeight: 1,
  rhythmHeight,
  capHeights: {
    Fantasque: 0.645,
  },
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
      <Rhythm show={show} spacing={16 * rhythmHeight} />
    </ThemeProvider>
  );
}

export default Theme;
