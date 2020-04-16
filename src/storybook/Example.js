import React from 'react';
import { styled, css } from 'goober';
import Code from './Code';

const width = (100 / 3) * 2;

const titleClass = css`
  margin: 0;
  display: block;
  padding-bottom: 12px;
`;

const Description = styled('p')`
  padding: 12px 0;
`;

const Wrapper = styled('div')`
  width: 80%;

  @media (min-width: 1100px) {
    width: ${width}%;
  }

  padding: 12px 0;
`;

function Example({ title, description, children, code, interfaces }) {
  return (
    <div>
      {title && <h1 className={titleClass}>{title}</h1>}
      {description && <Description>{description}</Description>}
      <Wrapper>{children}</Wrapper>
      {code && (
        <>
          <h2 className={titleClass}>Code example</h2>
          <Wrapper>
            <Code>{code}</Code>
          </Wrapper>
        </>
      )}
      {interfaces && (
        <>
          <h2 className={titleClass}>Interface</h2>
          <Wrapper>
            <Code>{interfaces}</Code>
          </Wrapper>
        </>
      )}
    </div>
  );
}

export default Example;
