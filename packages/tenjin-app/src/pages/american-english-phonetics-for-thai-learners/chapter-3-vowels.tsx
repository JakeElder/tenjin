import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Chapter } from "@mindfulstudio/tenjin-types/Chapter";

const CHAPTERS = gql`
  query ChapterQuery($slug: String!) {
    chapters(where: { slug: $slug }) {
      id
      name
      description
      slug
    }
  }
`;

const Chapter3: React.FC<{}> = () => {
  const { loading, error, data } = useQuery(CHAPTERS, {
    variables: { slug: "chapter-3-vowels" },
  });

  if (loading) {
    return <>loading</>;
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  const { chapters }: { chapters: Chapter[] } = data;
  const chapter = chapters[0];

  return (
    <>
      <h1>American English Phonetics for Thai Learners</h1>
      <h2>{chapter.name}</h2>
      <p>{chapter.description}</p>
    </>
  );
};

export default Chapter3;
