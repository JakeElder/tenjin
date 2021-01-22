import React from "react";
import styled from "@emotion/styled";
import { LongformHeading, Button } from "./Typography";

export type Props = {
  work: string;
  author: string;
  chapter: string;
};

const Author = styled.div``;

const ChapterTitle = styled.h2``;

export default function ChapterHeader({ work, author, chapter }: Props) {
  return (
    <>
      <Button disabled></Button>
      <LongformHeading>{work}</LongformHeading>
      <Author>by {author}</Author>
      <ChapterTitle>{chapter}</ChapterTitle>
    </>
  );
}
