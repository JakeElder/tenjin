import React from "react";
import WorksList, { LinkCreator } from "../src/WorksList";
import { Work } from "@mindfulstudio/tenjin-types/Work";

export default {
  title: "WorksList",
  component: WorksList,
};

const works: Work[] = [
  {
    id: "1",
    name: "AEP",
    slug: "aep",
    author: { name: "Person B. Personson", id: "1" },
  },
];

const linkCreator: LinkCreator = (text, href) => {
  return <a href={href}>{text}</a>;
};

export const Default = () => (
  <WorksList works={works} linkCreator={linkCreator} />
);
