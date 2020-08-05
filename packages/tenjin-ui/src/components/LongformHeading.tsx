import React from "react";
import styled from "@emotion/styled";
import { typography } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

type Props = {
  children: string;
  h: 1 | 2 | 3 | 4 | 5 | 6;
};

const Root = styled("h1", { shouldForwardProp })(typography);

function LongformHeading({ children, h }: Props) {
  return (
    <Root as={`h${h}`} fontSize={3}>
      {children}
    </Root>
  );
}

LongformHeading.defaultProps = { h: 1 } as Partial<Props>;

export default LongformHeading;
