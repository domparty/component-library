import { storiesOf } from '@storybook/react';
import React from 'react';
import Grid from './Grid.tsx';
import Hero from '../../storybook/Hero';

const div = (columns = 1, color = '#C295D8') => (
  <div data-columns={columns} style={{ backgroundColor: color, height: 30 }} />
);

storiesOf('@domparty|Components', module).add('Grid', () => (
  <>
    <Hero />
    <Grid gap={10} breakpoints={[200, 400]} columns={[1, 5]}>
      {[...Array(15).keys()].map((i) => div())}
    </Grid>

    <Grid gap={10} breakpoints={[200, 400]} columns={[1, 3]}>
      {div(2, 'black')}
      {div(1, 'black')}
    </Grid>

    <Grid gap={10} breakpoints={[200, 400]} columns={[1, 4]}>
      {[...Array(6).keys()].map((i) => div(2))}
    </Grid>
  </>
));
