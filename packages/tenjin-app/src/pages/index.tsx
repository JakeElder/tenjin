import React from "react";
import Header from "@mindfulstudio/tenjin-ui/Header";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { Work } from "@mindfulstudio/tenjin-types/Work";
import WorksList, { LinkCreator } from "@mindfulstudio/tenjin-ui/WorksList";

const WORKS = gql`
  query WorksQuery {
    works {
      id
      name
      slug
      author {
        id
        name
      }
    }
  }
`;

const linkCreator: LinkCreator = (text, href) => {
  return <Link href={`/${href}`}>{text}</Link>;
};

export default function Index() {
  const { loading, error, data } = useQuery(WORKS);
  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { works }: { works: Work[] } = data;

  return (
    <div>
      <Header>cmu.works</Header>
      <h2>Works</h2>
      <WorksList works={works} linkCreator={linkCreator} />
    </div>
  );
}
