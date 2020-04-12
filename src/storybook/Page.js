import React from 'react';
import { styled } from 'goober';

const P = styled('div')`
  padding-left: 80px;
`;

export default function Page({ children }) {
  return <P>{children}</P>;
}
