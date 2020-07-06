import React from "react";
import styled from "styled-components";

type Props = {
  work: string;
  author: string;
  chapter: string;
};

const Work = styled.h1`
  ${(props) => props.theme.setFontWithRhythm("Fantasque", 2.125, 1)}
`;

const Author = styled.div`
  margin-top: ${(props) => props.theme.rhythmSizing(1)}rem;
  color: #959595;
`;

const ChapterTitle = styled.h2`
  margin-top: ${(props) => props.theme.rhythmSizing(4)}rem;
  ${(props) => props.theme.setFontWithRhythm("Fantasque", 2, 1)}
`;

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
