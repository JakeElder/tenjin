import React from "react";
import Theme from "../src/Theme";
import styled, { ThemedStyledProps } from "styled-components";

export default {
  title: "Theme",
  component: Theme,
};

const Wrapper = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const H1 = styled.h1`
  margin-top: ${(props) => props.theme.rhythmSizing(1)}rem;
  ${(props) => props.theme.setFontWithRhythm("Fantasque", 3, 1)}
`;

const rhythmic = {
  height: (units: number) => {
    return (props: any) => {
      return `height: ${props.theme.rhythmSizing.call(props.theme, units)}rem`;
    };
  },
};

const Box = styled.div`
  background-color: #eee;
  ${rhythmic.height(10)};
`;

const P1 = styled.p`
  margin-top: ${(props) => props.theme.rhythmSizing(2)}rem;
  ${(props) => props.theme.setFontWithRhythm("Fantasque", 1)}
`;

const P2 = styled.p`
  margin-top: ${(props) => props.theme.rhythmSizing(2)}rem;
  ${(props) => props.theme.setFontWithRhythm("Fantasque", 1)}
`;

export const Default = () => (
  <Theme>
    <Wrapper>
      <H1>Theme</H1>
      <P1>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </P1>
      <P2>There should be no default margins</P2>
    </Wrapper>
  </Theme>
);
