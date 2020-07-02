import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Work } from "@mindfulstudio/tenjin-types/Work";

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
      <h1>cmu.works</h1>
      <h2>Works</h2>
      <pre>{JSON.stringify(works, null, 2)}</pre>
    </div>
  );
}
