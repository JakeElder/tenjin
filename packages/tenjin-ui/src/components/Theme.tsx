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

const theme = {
  fonts: {
    heading: "Fantasque",
    body: "Fantasque",
  },
  fontSizes: [".75rem", ".875rem", "1rem", "1.25rem", "1.5rem", "2rem"],
  colors: {
    brand: [
      ["#32B66B", "#4BCE84", "#9BE4BA"],
      ["#9D4AC0", "#B16FCD", "#DABBE7"],
    ],
    shades: [
      "#000",
      "#222",
      "#444",
      "#555",
      "#666",
      "#888",
      "#999",
      "#CCC",
      "#DDD",
      "#FBFBFB",
    ],
  },
};

function Theme({ children }: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalCSS} />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
