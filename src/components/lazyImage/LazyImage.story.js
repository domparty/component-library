import { storiesOf } from '@storybook/react';
import React from 'react';
import Hero from '../../storybook/Hero';
import Example from '../../storybook/Example';
import Description from '../../storybook/Description';
import Page from '../../storybook/Page';
import LazyImage from './LazyImage';

const example = `
<div style={{ width: 400 }}>
  <LazyImage src="https://i.picsum.photos/id/902/400/400.jpg" width={400} height={400} />
</div>
`;

storiesOf('@domparty|Components', module).add('LazyImage', (data) => (
  <>
    <Hero data={data} title="LazyImage component" />

    <Page>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique nulla vel ipsum
        suscipit rutrum. Aliquam pulvinar lobortis purus, sed vestibulum arcu lacinia et.
        Pellentesque pulvinar lacus id tellus ullamcorper dignissim. Duis auctor justo nibh. Mauris
        interdum vitae lorem vel lobortis. Maecenas ornare dapibus ultrices. Nulla id ipsum
        vehicula, vestibulum erat varius, porta risus. Quisque vitae mattis ligula. Suspendisse
        auctor eros non cursus scelerisque. Maecenas dapibus risus ac vehicula euismod. Vestibulum
        lobortis blandit convallis. Suspendisse lobortis lacus a justo cursus, vitae fermentum ante
        faucibus. Nulla placerat, mi vel semper porttitor, massa nunc dapibus augue, et interdum est
        urna non leo.
      </Description>

      <Example title="Lazy image" code={example}>
        <div style={{ width: 400 }}>
          <LazyImage src="https://i.picsum.photos/id/902/400/400.jpg" width={400} height={400} />
        </div>
      </Example>
    </Page>
  </>
));
