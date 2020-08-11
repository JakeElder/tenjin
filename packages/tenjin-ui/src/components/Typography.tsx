import React from "react";
import styled from "@emotion/styled";
import { typography, color } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

type HeadingProps = {
  children: React.ReactNode;
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

export const ExerciseName = headingFactory({
  fontSize: 4,
  color: "shades.0",
});

export const LongformDetail = headingFactory({
  fontSize: 3,
  color: "shades.6",
});

export const ExerciseSubheading = headingFactory({
  fontSize: 3,
  color: "shades.6",
});

export const LongformSubheading = headingFactory({
  fontSize: 4,
  color: "shades.0",
});

export const ExerciseHeading = headingFactory({
  fontSize: 4,
  color: "shades.0",
});

type BodyCopyFactoryProps = {
  fontSize?: number;
  color?: string;
};

type BodyCopyProps<AS> = {
  children: React.ReactNode;
  as?: AS;
};

const BodyCopy = styled("span", { shouldForwardProp })(typography, color);

function bodyCopyFactory<T>({ fontSize, color }: BodyCopyFactoryProps) {
  const R = ({ children, as }: BodyCopyProps<T>) => (
    <BodyCopy as={as} fontFamily="body" fontSize={fontSize} color={color}>
      {children}
    </BodyCopy>
  );
  return R;
}

export const LongformCopy = bodyCopyFactory<"p" | "span">({
  fontSize: 1,
  color: "shades.1",
});
