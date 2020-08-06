import React from "react";
import styled from "@emotion/styled";
import { typography, color } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

type HeadingProps = {
  children: string;
  h: 1 | 2 | 3 | 4 | 5 | 6;
};

type HeadingFactoryProps = {
  fontSize?: number;
  color?: string;
};

const Heading = styled("h1", { shouldForwardProp })(typography, color);

function headingFactory({ fontSize, color }: HeadingFactoryProps) {
  const R = ({ children, h }: HeadingProps) => (
    <Heading
      as={`h${h}`}
      fontFamily="heading"
      fontSize={fontSize}
      color={color}
    >
      {children}
    </Heading>
  );
  R.defaultProps = { h: 1 } as Partial<HeadingProps>;
  return R;
}

export const LongformHeading = headingFactory({
  fontSize: 4,
  color: "shades.0",
});
