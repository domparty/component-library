import React from 'react';
import { styled } from 'goober';

const Div = styled('div')`
  width: calc(100%);
  padding: ${(props) => props.height / 2}px 0px;
  background: ${(props) => props.background};
  margin: -8px -8px 0 -8px;
  position: relative;
`;

const Inner = styled('div')`
  color: ${(props) => props.color};
  margin: 8px 8px 0 8px;
`;

function FullWidth({ children, height = 250, color = '#ffffff', background = '#000000' }) {
  return (
    <Div background={background} height={height}>
      <Inner color={color}>{children}</Inner>
    </Div>
  );
}

export default FullWidth;
