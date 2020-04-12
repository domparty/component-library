import { storiesOf } from '@storybook/react';
import React from 'react';
import Grid from './Grid.tsx';
import Hero from '../../storybook/Hero';

const div = (columns = 1, color = '#C295D8', height = 30) => (
  <div data-columns={columns} style={{ backgroundColor: color, height }} />
);

storiesOf('@domparty|Components', module).add('Grid', () => (
  <>
    <Hero />
    <br />

    <Grid gap={24} breakpoints={[200, 400]} columns={[1, 3]}>
      {div(2, 'black')}
      {div(1, 'black')}
      {div(1, 'black')}
      {div(2, 'black')}
      {div(3, 'black')}
    </Grid>
    <br />

    <Grid gap={24} columns={2}>
      {div(1, 'black')}
      {div(1, 'black')}
      {div(1, 'black')}
      {div(1, 'black')}
    </Grid>

    <Grid gap={24} columns={2}>
      <div>
        <Grid fullHeight gap={12} columns={1}>
          {div(1, '#C295D8', 'auto')}
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
  </>
));
