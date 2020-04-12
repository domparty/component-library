import React from 'react';
import { styled } from 'goober';

const P = styled('p')`
  width: calc((100% / 3) * 2);
  padding: 12px 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0;
`;

export default function Description({ children }) {
  return <P>{children}</P>;
}
