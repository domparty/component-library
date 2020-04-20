import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Hero from '../../storybook/Hero';
import Example from '../../storybook/Example';
import Description from '../../storybook/Description';
import Page from '../../storybook/Page';
import Snackbar from './Snackbar';
import lipsum from '../../storybook/lipsum';
import { styled } from 'goober';
import config from '../../storybook/config';

const example = `
<Snackbar width={250} textColor="#C295D8" background="black" inline actionLabel={false}>
  Marked as favorite
</Snackbar>

<Snackbar
  actionClick={snackbarCallback}
  width="80%"
  persistent
  inline
  actionLabel="Action"
>
  Item already exists
</Snackbar>

<Snackbar
  width="80%"
  background="#C295D8"
  persistent
  inline
  actionLabel={false}
>
  Persistent snackbar
</Snackbar>

<Snackbar persistent actionColor="#C295D8">
  No-inline persistent snackbar
</Snackbar>
`;

const interfaces = `
interface SnackbarProps {
  children: React.ReactChild;
  persistent?: boolean;
  inline?: boolean;
  actionLabel?: string | boolean;
  actionClick?: () => void;
  visibleTime?: number | null;
  background?: string;
  textColor?: string;
  actionColor?: string;
  fadeOutTime?: number;
  width?: number | string;
}
`;

const SnackbarWrapper = styled('div')`
  height: 80px;
  padding: 10px 0;

  @media (min-width: 600px) {
    height: 40px;
  }
`;

storiesOf('@domparty|Components', module).add('Snackbar', (data) => {
  const [snackbarClosed, setSnackbarClosed] = useState(false);

  function snackbarCallback() {
    setSnackbarClosed(true);
  }

  return (
    <>
      <Hero data={data} title="Snackbar component" />

      <Page>
        <Description>{lipsum}</Description>
        <p>{snackbarClosed && `Snackbar action clicked`}</p>
        <Example title="Snackbar" code={example} interfaces={interfaces}>
          <SnackbarWrapper>
            <Snackbar
              width={250}
              textColor={config.primaryColor}
              background="black"
              inline
              actionLabel={false}
            >
              Marked as favorite
            </Snackbar>
          </SnackbarWrapper>
          <SnackbarWrapper>
            <Snackbar
              actionClick={snackbarCallback}
              width="100%"
              persistent
              inline
              actionLabel="Action"
            >
              Item already exists
            </Snackbar>
          </SnackbarWrapper>
          <SnackbarWrapper>
            <Snackbar
              width="80%"
              background={config.primaryColor}
              persistent
              inline
              actionLabel={false}
            >
              Persistent snackbar
            </Snackbar>
          </SnackbarWrapper>
          <Snackbar persistent actionColor={config.primaryColor}>
            No-inline persistent snackbar
          </Snackbar>
        </Example>
      </Page>
    </>
  );
});
