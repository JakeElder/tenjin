import React from "react";
import styled from "@emotion/styled";
import {
  LongformHeading,
  LongformDetail,
  LongformSubheading,
} from "../src/components/Typography";

export default {
  title: "Foundation | Typography",
};

type TextStyle = {
  ids: string[];
  Component: React.ReactType;
  description: string;
};

const textStyles: TextStyle[] = [
  {
    ids: ["Longform Heading", "Exercise Name"],
    Component: LongformHeading,
    description: "Fantasque Sans Mono Regular 32px #000",
  },
  {
    ids: ["Longform Detail", "Exercise Subheading"],
    Component: LongformDetail,
    description: "Fantasque Sans Mono Regular 20px #999",
  },
  {
    ids: ["Longform Subheading", "Exercise Heading"],
    Component: LongformSubheading,
    description: "Fantasque Sans Mono Bold 24px #000",
  },
];

const Table = styled.table`
  width: 100%;
`;

const TR = styled.tr`
  border-bottom: 1px solid #d9d9d9;
`;

const IDTD = styled.td`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: #f8f8f8;
  color: #777;
  padding: 26px 20px;
`;

const DescriptionTD = styled.td`
  vertical-align: middle;
  padding-left: 22px;
`;

export const Default = () => (
  <Table>
    <tbody>
      {textStyles.map(({ ids, Component, description }) => {
        return (
          <TR key={ids.join()}>
            <IDTD>
              {ids.map((id) => (
                <div style={{ marginBottom: 4 }} key={id}>
                  {id}
                </div>
              ))}
            </IDTD>
            <DescriptionTD>
              <Component>{description}</Component>
            </DescriptionTD>
          </TR>
        );
      })}
    </tbody>
  </Table>
);
