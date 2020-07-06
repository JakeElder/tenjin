import React from "react";
import styled from "styled-components";

type Props = {
  spacing: number;
  show: boolean;
};

const Root = styled.div<Props>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  z-index: -1;

  background-image: linear-gradient(#e6f1f6 1px, transparent 1px);
  background-size: 100% ${(props) => props.spacing}px;
  background-position: 0 ${(props) => props.spacing - 1}px;
`;

function Rhythm({ spacing, show }: Props) {
  return <Root spacing={spacing} show={show} />;
}

Rhythm.defaultProps = { spacing: 12, show: true };

export default Rhythm;
