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
      <Description>{lipsum}</Description>

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
            <Stickynav offset={40} stopAtSelector={'[data-js="sticky2selector"]'}>
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
        <div data-js="sticky2selector" />
      </Example>
    </Page>
  </>
));
