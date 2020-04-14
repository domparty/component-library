import React from 'react';
import { styled } from 'goober';
import FullWidth from './FullWidth';
import config from './config';

const P = styled('div')`
  padding-left: 40px;
  height: ${(props) => (props.height ? props.height : 'auto')};

  @media (min-width: 1100px) {
    padding-left: 80px;
  }
`;

const Link = styled('a')`
  color: ${config.primaryColor};
`;

export default function Page({ children, height = null }) {
  return (
    <>
      <P height={height}>{children}</P>
      <FullWidth height={60}>
        <P>
          <Link
            href="https://github.com/domparty/component-library"
            rel="noreferrer noopener"
            target="_blank"
          >
            Github project
          </Link>
        </P>
      </FullWidth>
    </>
  );
}
