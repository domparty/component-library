import React from 'react';
import { styled } from 'goober';
import Code from './Code';

const width = (100 / 3) * 2;

const Title = styled('h1')`
  margin: 0;
  display: block;
  padding-bottom: 12px;
`;

const Description = styled('p')`
  padding: 12px 0;
`;

const CodeWrapper = styled('div')`
  width: 80%;

  @media (min-width: 1100px) {
    width: ${width}%;
  }

  padding: 12px 0;
`;

const ChildrenWrapper = styled('div')`
  width: 80%;

  @media (min-width: 1100px) {
    width: ${width}%;
  }

  padding: 12px 0;
`;

function Example({ title, description, children, code }) {
  return (
    <div>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      <ChildrenWrapper>{children}</ChildrenWrapper>
      {code && (
        <CodeWrapper>
          <Code>{code}</Code>
        </CodeWrapper>
      )}
    </div>
  );
}

export default Example;
