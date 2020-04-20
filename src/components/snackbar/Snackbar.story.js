import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Hero from '../../storybook/Hero';
import Example from '../../storybook/Example';
import Description from '../../storybook/Description';
import Page from '../../storybook/Page';
import Snackbar from './Snackbar';
import lipsum from '../../storybook/lipsum';
import { styled } from 'goober';

const example = ``;

const interfaces = ``;

const SnackbarWrapper = styled('div')`
  height: 40px;
  padding: 10px 0;
`;

storiesOf('@domparty|Components', module).add('Snackbar', (data) => {
  return (
    <>
      <Hero data={data} title="Snackbar component" />

      <Page>
        <Description>{lipsum}</Description>

        <Example title="Snackbar" code={example} interfaces={interfaces}>
          <SnackbarWrapper>
            <Snackbar inline actionLabel={false}>
              Marked as favorite
            </Snackbar>
          </SnackbarWrapper>
          <SnackbarWrapper>
            <Snackbar persistent inline actionLabel="Action">
              Item already exists
            </Snackbar>
          </SnackbarWrapper>
          <SnackbarWrapper>
            <Snackbar persistent inline actionLabel={false}>
              Persistent snackbar
            </Snackbar>
          </SnackbarWrapper>
          <Snackbar persistent>No-inline snackbar</Snackbar>
        </Example>
      </Page>
    </>
  );
});
