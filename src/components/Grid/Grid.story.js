import { storiesOf } from '@storybook/react';
import React from 'react';
import Grid from './Grid.tsx';
import Hero from '../../storybook/Hero';

storiesOf('@domparty|Components', module).add('Grid', () => (
  <>
    <Hero />
    <Grid gap={20} breakpoints={[200, 400]} columns={[2, 3]}>
      {[...Array(5).keys()].map((i) => (
        <div style={{ border: '1px solid #C295D8' }}>Hey {i}</div>
      ))}
    </Grid>
  </>
));
