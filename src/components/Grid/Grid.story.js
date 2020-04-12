import { storiesOf } from '@storybook/react';
import React from 'react';
import Grid from './Grid.tsx';
import Hero from '../../storybook/Hero';
import Example from '../../storybook/Example';
import Description from '../../storybook/Description';
import Page from '../../storybook/Page';

const div = (columns = 1, color = '#C295D8', height = 30) => (
  <div data-columns={columns} style={{ backgroundColor: color, height }} />
);

const simpleExample = `
<Grid gap={24} breakpoints={[200, 400]} columns={[1, 3]}>
  <div data-columns={2} style={{ backgroundColor: '#C295D8' }} />
  <div data-columns={1} style={{ backgroundColor: '#C295D8' }} />
  <div data-columns={1} style={{ backgroundColor: '#C295D8' }} />
  <div data-columns={2} style={{ backgroundColor: '#C295D8' }} />
  <div data-columns={3} style={{ backgroundColor: '#C295D8' }} />
</Grid>
`;

const advancedExample = `
<Grid gap={24} columns={2}>
<div>
  <Grid gap={12} columns={4}>
    <div data-columns={4} style={{ backgroundColor: '#C295D8' }} />
    
    <div data-columns={1} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={1} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={1} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={1} style={{ backgroundColor: '#C295D8' }} />
    
    <div data-columns={2 / 3} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={2 / 3} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={2 / 3} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={2 / 3} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={2 / 3} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={2 / 3} style={{ backgroundColor: '#C295D8' }} />

    <div data-columns={0.5} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={0.5} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={0.5} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={0.5} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={0.5} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={0.5} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={0.5} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={0.5} style={{ backgroundColor: '#C295D8' }} />
  </Grid>
</div>
<div>
  <Grid gap={12} columns={2}>
    <div data-columns={2} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={1} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={1} style={{ backgroundColor: '#C295D8' }} />
    <div data-columns={2} style={{ backgroundColor: '#C295D8' }} />
  </Grid>
</div>
</Grid>
`;

storiesOf('@domparty|Components', module).add('Grid', () => (
  <>
    <Hero title="Grid component" />

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

      <Example title="Simple grid" code={simpleExample}>
        <Grid gap={24} breakpoints={[200, 400]} columns={[1, 3]}>
          {div(2)}
          {div(1)}
          {div(1)}
          {div(2)}
          {div(3)}
        </Grid>
      </Example>

      <Example title="Advanced grid" code={advancedExample}>
        <Grid gap={24} columns={2}>
          <div>
            <Grid gap={12} columns={4}>
              {div(4)}
              {div(1)}
              {div(1)}
              {div(1)}
              {div(1)}
              {div(2 / 3)}
              {div(2 / 3)}
              {div(2 / 3)}
              {div(2 / 3)}
              {div(2 / 3)}
              {div(2 / 3)}
              {div(0.5)}
              {div(0.5)}
              {div(0.5)}
              {div(0.5)}
              {div(0.5)}
              {div(0.5)}
              {div(0.5)}
              {div(0.5)}
            </Grid>
          </div>
          <div>
            <Grid gap={12} columns={2}>
              {div(2)}
              {div(1)}
              {div(1)}
              {div(2)}
            </Grid>
          </div>
        </Grid>
      </Example>
    </Page>
  </>
));
