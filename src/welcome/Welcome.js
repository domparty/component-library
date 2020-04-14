import React from 'react';
import Hero from '../storybook/Hero';
import Description from '../storybook/Description';
import Page from '../storybook/Page';

function Welcome() {
  return (
    <div>
      <Hero title="Welcome" />
      <Page height="100vh">
        <Description>
          A white label component library, ready for you to style. Unbiased on how styling should
          look on your website, while giving you the handles to kick-start you application with some
          helpful functional components.
        </Description>
        <Description>
          This component library focusses fully on performance and delivering small, useful
          components.
        </Description>
      </Page>
    </div>
  );
}

export default Welcome;
