import React from "react";
import ChapterHeader from "../src/components/ChapterHeader";

export default {
  title: "Components | Chapter Header",
  component: ChapterHeader,
};

export const Default = () => (
  <ChapterHeader
    work="American English Phonetics for Thai Learners"
    author="Jirapat J. Jangjamras"
    chapter="Chapter 3: Vowels"
  />
);
