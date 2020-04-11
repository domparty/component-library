import { storiesOf } from '@storybook/react';
import React from 'react';
import Grid from './Grid.tsx';
import Hero from '../../storybook/Hero';

storiesOf('@domparty|Components', module).add('Grid', () => (
  <>
    <Hero />
    <Grid />
  </>
));
