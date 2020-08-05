import React from "react";
import styled from "@emotion/styled";

type Props = {
  work: string;
  author: string;
  chapter: string;
};

const Work = styled.h1``;

const Author = styled.div``;

const ChapterTitle = styled.h2``;

const ChapterHeader: React.FC<Props> = ({ work, author, chapter }) => {
  return (
    <>
      <Work>{work}</Work>
      <Author>by {author}</Author>
      <ChapterTitle>{chapter}</ChapterTitle>
    </>
  );
};

export default ChapterHeader;
