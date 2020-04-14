import React, { useState, useRef, useEffect } from 'react';

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

function Pagination({
  items: innerItems,
  children,
  itemsPerPage = 2,
  page = 1,
  disableUrlUpdates = false,
  pageParam = 'page',
}: PaginationProps) {
  const regexp = `[\\?|&]${pageParam}=(\\d+)`;
  const pageRegex = useRef(new RegExp(regexp));

  const [activePage, setActivePage] = useState(page - 1);
  const totalPageAmount = useRef(Math.ceil(innerItems.length / itemsPerPage));

  useEffect(() => {
    if (disableUrlUpdates === false) {
      const matches = window.location.search.match(pageRegex.current);
      if (matches && typeof matches[1] !== 'undefined') {
        const p = parseInt(matches[1]);
        setActivePage(p > 0 ? p - 1 : 0);
      }
    }
  }, []);

  const items = innerItems.slice(
    itemsPerPage * activePage,
    itemsPerPage * activePage + itemsPerPage
  );

  const pages = [...Array(Math.ceil(innerItems.length / itemsPerPage)).keys()].map((n) => ({
    number: n + 1,
    onClick: () => onPageClick(n),
  }));

  function onPageClick(p) {
    if (disableUrlUpdates === false) {
      const s = window.location.search.replace(pageRegex.current, '');
      const nextQ = s === '' ? `?${pageParam}=${p + 1}` : `${s}&${pageParam}=${p + 1}`;
      window.location.search = nextQ;
    }

    setActivePage(p);
  }

  return children({ items, page: activePage + 1, pages, pageAmount: totalPageAmount.current });
}

export default Pagination;
