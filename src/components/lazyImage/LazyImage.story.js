import { storiesOf } from '@storybook/react';
import React from 'react';
import Hero from '../../storybook/Hero';
import Example from '../../storybook/Example';
import Description from '../../storybook/Description';
import Page from '../../storybook/Page';
import LazyImage from './LazyImage';
import lipsum from '../../storybook/lipsum';

const example = `
<div style={{ width: 400 }}>
  <LazyImage src="https://i.picsum.photos/id/902/400/400.jpg" width={400} height={400} />
</div>
`;

storiesOf('@domparty|Components', module).add('LazyImage', (data) => (
  <>
    <Hero data={data} title="LazyImage component" />

    <Page>
      <Description>{lipsum}</Description>

      <Example title="Lazy image" code={example}>
        <div style={{ width: 400 }}>
          <LazyImage src="https://i.picsum.photos/id/902/400/400.jpg" width={400} height={400} />
        </div>
      </Example>
    </Page>
  </>
));
