import { storiesOf } from '@storybook/react';
import React from 'react';
import Grid from './Grid.tsx';
import Hero from '../../storybook/Hero';

storiesOf('@domparty|Components', module).add('Grid', () => (
  <>
    <Hero />
    <Grid gap={10} breakpoints={[200, 400]} columns={[1, 5]}>
      {[...Array(25).keys()].map((i) => (
        <div style={{ backgroundColor: '#C295D8', display: 'block', height: 50 }} />
      ))}
    </Grid>
  </>
));
