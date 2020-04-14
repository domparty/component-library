import { storiesOf } from '@storybook/react';
import React from 'react';
import Hero from '../../storybook/Hero';
import Example from '../../storybook/Example';
import Description from '../../storybook/Description';
import Page from '../../storybook/Page';
import Pagination from './Pagination';

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
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique nulla vel ipsum
        suscipit rutrum. Aliquam pulvinar lobortis purus, sed vestibulum arcu lacinia et.
        Pellentesque pulvinar lacus id tellus ullamcorper dignissim. Duis auctor justo nibh. Mauris
        interdum vitae lorem vel lobortis. Maecenas ornare dapibus ultrices. Nulla id ipsum
        vehicula, vestibulum erat varius, porta risus. Quisque vitae mattis ligula. Suspendisse
        auctor eros non cursus scelerisque. Maecenas dapibus risus ac vehicula euismod. Vestibulum
        lobortis blandit convallis. Suspendisse lobortis lacus a justo cursus, vitae fermentum ante
        faucibus. Nulla placerat, mi vel semper porttitor, massa nunc dapibus augue, et interdum est
        urna non leo.
      </Description>

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
