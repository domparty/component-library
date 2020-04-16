import { storiesOf } from '@storybook/react';
import React from 'react';
import Hero from '../../storybook/Hero';
import Example from '../../storybook/Example';
import Description from '../../storybook/Description';
import Page from '../../storybook/Page';
import Stickynav from './Stickynav';
import lipsum from '../../storybook/lipsum';

const example = `
<Stickynav offset={40} stopAtSelector={'[data-js="stickyselector"]'}>
  <p>Item</p>
  <p>Item</p>
  <p>Item</p>
  <p>Item</p>
  <p>Item</p>
</Stickynav>
`;

const interfaces = `
interface StickynavProps {
  children: ReactNode;
  stopAtSelector: string;
  offset?: number;
}
`;

storiesOf('@domparty|Components', module).add('Stickynav', (data) => (
  <>
    <Hero data={data} title="Stickynav component" />

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

      <Example title="Pagination" code={example} interfaces={interfaces}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: 200, paddingTop: 70 }}>
            <Stickynav offset={40} stopAtSelector={'[data-js="stickyselector"]'}>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
            </Stickynav>
          </div>
          <div style={{ width: 'calc(100% - 200px)' }}>
            <h1>Title</h1>
            <p>{lipsum}</p>
            <h1>Another title</h1>
            <p>{lipsum}</p>
          </div>
        </div>
        <div data-js="stickyselector" style={{ display: 'flex' }}>
          <div style={{ width: 200, paddingTop: 70 }}>
            {/* <Stickynav offset={40} stopAtSelector={'[data-js="sticky2selector"]'}>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
              <p>Item</p>
            </Stickynav> */}
          </div>
          <div style={{ width: 'calc(100% - 200px)' }}>
            <h1>Title</h1>
            <p>{lipsum}</p>
            <h1>Another title</h1>
            <p>{lipsum}</p>
          </div>
        </div>
        <div data-js="sticky2selector" />
      </Example>
    </Page>
  </>
));
