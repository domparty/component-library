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
    <br />

    {/* <Grid gap={24} breakpoints={[200, 400]} columns={[1, 3]}>
      {div(2, 'black')}
      {div(1, 'black')}
      {div(1, 'black')}
      {div(2, 'black')}
      {div(3, 'black')}
    </Grid> */}

    <Grid gap={10} columns={2}>
      {div(1, 'black')}
      {div(1, 'black')}
      {div(1, 'black')}
      {div(1, 'black')}
      {div(1, 'black')}
    </Grid>
  </>
));
