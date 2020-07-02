import React from "react";
import Theme from "../src/Theme";

export default {
  title: "Theme",
  component: Theme,
};

export const Default = () => (
  <Theme>
    <h1>Theme</h1>
    <p>This should be Fantasque</p>
    <p>There should be no default margins</p>
  </Theme>
);
