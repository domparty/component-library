import React from 'react';
import { styled } from 'goober';

const heroHeight = 250;

const Div = styled('div')`
  width: calc(100% + 16px);
  height: ${heroHeight}px;
  background: black;
  margin: -8px -8px 0 -8px;
  position: relative;
`;

const Title = styled('h1')`
  color: #ffffff;
  margin: 0;
  display: block;
  padding-top: ${heroHeight / 3}px;
  padding-left: 48px;

  @media (min-width: 1100px) {
    padding-left: 88px;
  }
`;

function Hero({ title }) {
  return (
    <Div>
      <Title>{title}</Title>
    </Div>
  );
}

export default Hero;
