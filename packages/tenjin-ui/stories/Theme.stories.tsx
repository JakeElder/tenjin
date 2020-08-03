import React from "react";
import Theme from "../src/components/Theme";
import styled from "styled-components";

export default {
  title: "Foundation | Theme",
  component: Theme,
};

const Wrapper = styled.div``;

export const Default = () => (
  <Wrapper>
    <h1>Theme</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt.
    </p>
    <p>There should be no default margins</p>
  </Wrapper>
);
