import React from 'react';
import { styled } from 'goober';
import copyclip from 'copyclip';
import ImportPath from './ImportPath';
import config from './config';

const heroHeight = 250;

const Div = styled('div')`
  width: calc(100%);
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

const Import = styled('div')`
  color: ${config.primaryColor};
  padding-top: 24px;
  padding-left: 48px;
  cursor: pointer;

  @media (min-width: 1100px) {
    padding-left: 88px;
  }
`;

function Hero({ title, data = {} }) {
  const path = ImportPath({ data });

  function onPathClick() {
    copyclip(path);
  }

  return (
    <Div>
      <Title>{title}</Title>
      <Import onClick={onPathClick}>{path}</Import>
    </Div>
  );
}

export default Hero;
