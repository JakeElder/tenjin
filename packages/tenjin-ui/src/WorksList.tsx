import React from "react";
import { Work } from "@mindfulstudio/tenjin-types/Work";

type Props = {
  works: Work[];
};

const WorksList: React.FC<Props> = ({ works }) => {
  return <div>{JSON.stringify(works)}</div>;
};

export default WorksList;
