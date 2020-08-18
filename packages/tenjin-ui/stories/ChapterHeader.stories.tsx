import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ChapterHeader, { Props } from "../src/components/ChapterHeader";

export default {
  title: "Components / Chapter Header",
  component: ChapterHeader,
} as Meta;

const Template: Story<Props> = (args) => <ChapterHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  work: "American English Phonetics for Thai Learners",
  author: "Jirapat J. Jangjamras",
  chapter: "Chapter 3: Vowels",
};
