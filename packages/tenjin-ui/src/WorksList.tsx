import React, { ReactElement } from "react";
import { Work } from "@mindfulstudio/tenjin-types/Work";

export type LinkCreator = (text: string, href: string) => ReactElement;

type Props = {
  works: Work[];
  linkCreator: LinkCreator;
};

const WorksListItem: React.FC<{ work: Work; linkCreator: LinkCreator }> = ({
  work,
  linkCreator,
}) => {
  return linkCreator(work.name, work.slug);
};

const WorksList: React.FC<Props> = ({ works, linkCreator }) => {
  return (
    <>
      {works.map((work) => (
        <WorksListItem key={work.id} work={work} linkCreator={linkCreator} />
      ))}
    </>
  );
};

export default WorksList;
