import React from "react";
import WorksList from "../src/WorksList";
import { Work } from "@mindfulstudio/tenjin-types/Work";

export default {
  title: "WorksList",
  component: WorksList,
};

const works: Work[] = [{ id: "1", name: "AEP" }];

export const Default = () => <WorksList works={works} />;
