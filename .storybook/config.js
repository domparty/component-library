import React from 'react';
import { configure, addParameters } from '@storybook/react';
import { setPragma } from 'goober';
import theme from './theme';
import './global.css';

setPragma(React.createElement);

addParameters({
  options: {
    theme,
    showPanel: false,
    isToolshown: false,
    panelPosition: 'right',
  },
});

function loadStories() {
  // put welcome screen at the top of the list so it's the first one displayed
  require('../src/welcome/welcome.story');

  const req = require.context('../src', true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
