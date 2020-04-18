import { storiesOf } from '@storybook/react';
import React from 'react';
import Hero from '../../storybook/Hero';
import Example from '../../storybook/Example';
import Description from '../../storybook/Description';
import Page from '../../storybook/Page';
import Pagination from './Pagination';
import lipsum from '../../storybook/lipsum';

const example = `
const characters = [
  { name: 'Delores' },
  { name: 'Teddy' },
  { name: 'Bernard' },
  { name: 'Maeve' },
  { name: 'Logan' },
  { name: 'Hector' },
  { name: 'William' },
];

<Pagination items={characters} itemsPerPage={2}>
  {({ items, page, pages, pageAmount }) => (
    <>
      <p>The active items on page {page} are:</p>
      {items.map((item) => (
        <p>{item.name}</p>
      ))}
      {pages.map((p) => (
        <span
          style={{ marginRight: 15, fontWeight: p.number === page ? 'bold' : 'normal' }}
          onClick={p.onClick}
        >
          {p.number}
        </span>
      ))}

      <p>In total, there are {pageAmount} pages</p>
    </>
  )}
</Pagination>
`;

const interfaces = `
type Page = {
  number: number;
  onClick: () => void;
};

type PaginationRenderProps = {
  items: [any];
  page: number;
  pages: [Page];
  pageAmount: number;
};

interface PaginationProps {
  items: [any];
  children: (PaginationRenderProps) => React.ReactElement;
  itemsPerPage?: number;
  page?: number;
  disableUrlUpdates?: boolean;
  pageParam?: string;
}
`;

const characters = [
  { name: 'Delores' },
  { name: 'Teddy' },
  { name: 'Bernard' },
  { name: 'Maeve' },
  { name: 'Logan' },
  { name: 'Hector' },
  { name: 'William' },
];

storiesOf('@domparty|Components', module).add('Pagination', (data) => (
  <>
    <Hero data={data} title="Pagination component" />

    <Page>
      <Description>{lipsum}</Description>

      <Example title="Pagination" code={example} interfaces={interfaces}>
        <Pagination items={characters} itemsPerPage={2} disableUrlUpdates>
          {({ items, page, pages, pageAmount }) => (
            <>
              <p>The active items on page {page} are:</p>
              {items.map((item) => (
                <p>{item.name}</p>
              ))}
              {pages.map((p) => (
                <span
                  style={{ marginRight: 15, fontWeight: p.number === page ? 'bold' : 'normal' }}
                  onClick={p.onClick}
                >
                  {p.number}
                </span>
              ))}

              <p>In total, there are {pageAmount} pages</p>
            </>
          )}
        </Pagination>
      </Example>
    </Page>
  </>
));
