import React, { cloneElement, ReactElement } from 'react';
import { css } from 'goober';

export interface GridProps {
  children: ReactElement[];
  breakpoints?: number[];
  columns?: number | number[];
  gap?: number;
  fullHeight?: boolean;
  style?: {};
  slices?: any;
}

function getValueFromIndex(a, i, f = undefined) {
  if (f !== undefined && i > a.length - 1) return f;
  return a[
    Math.min(
      // @ts-ignore
      a.length - 1,
      i
    )
  ];
}

const gridClassname = (props) => css`
  ${props.breakpoints
    .map((b, i) => {
      const c = getValueFromIndex(props.columns, i);
      const s = getValueFromIndex(props.slices, i);
      // @ts-ignore
      const nb = getValueFromIndex(breakpoints, i + 1, false);
      let mediaQuery = `${b !== 0 ? `@media (min-width: ${b}px) {` : ''}
            width: calc(${
              (100 / c) * props.childColumns[Math.min(props.childColumns.length - 1, i)]
            }% - ${gap}px);
            margin: ${gap / 2}px;
          ${b !== 0 ? `}` : ''}`;
      if (s !== false) {
        const min = b !== 0 ? `(min-width: ${b}px)` : '';
        const max = nb !== false ? `(max-width: ${nb - 1}px)` : '';
        const doubleQuery = min !== '' && max !== '';
        const useQuery = min !== '' || max !== '';
        mediaQuery += `
            ${useQuery ? `@media ${min} ${doubleQuery ? 'and' : ''} ${max} {` : ''}
              &:nth-of-type(n+${s + 1}){
                display: none;
              }  
            ${useQuery ? '}' : ''}
              `;
      }
      return mediaQuery;
    })
    .join('')}
`;

function Grid({
  children,
  breakpoints = [],
  columns = [],
  gap = 0,
  fullHeight = false,
  slices = false,
  style: innerStyle = {},
}: GridProps) {
  if (typeof children === 'undefined') return null;
  let globalCss = null;
  let globalCount = 0;
  if (breakpoints[0] !== 0) breakpoints.unshift(0);
  if (typeof columns === 'number') columns = [columns];
  if (breakpoints.length === 0) return null;
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: -(gap / 2),
    ...innerStyle,
    ...(fullHeight
      ? {
          position: 'relative',
          height: `calc(100% + ${gap}px)`,
        }
      : {}),
  };

  function getChildColumns(c) {
    if (Array.isArray(c)) return c.map(getChildColumns);
    if (c === null || typeof c === 'undefined' || typeof c.props === 'undefined') return c;

    let childColumns = c.props['data-columns'] || [1];

    if (typeof childColumns === 'number') {
      childColumns = [childColumns];
    }

    return childColumns;
  }

  function handleChild(c) {
    if (Array.isArray(c)) return c.map(handleChild);
    if (c === null || typeof c === 'undefined' || typeof c.props === 'undefined') return c;

    let childColumns = c.props['data-columns'] || [1];

    if (typeof childColumns === 'number') {
      childColumns = [childColumns];
    }

    // @ts-ignore
    let className = globalCss`
      ${breakpoints
        .map((b, i) => {
          const c = getValueFromIndex(columns, i);
          const s = getValueFromIndex(slices, i);
          // @ts-ignore
          const nb = getValueFromIndex(breakpoints, i + 1, false);
          let mediaQuery = `${b !== 0 ? `@media (min-width: ${b}px) {` : ''}
              width: calc(${
                (100 / c) * childColumns[Math.min(childColumns.length - 1, i)]
              }% - ${gap}px);
              margin: ${gap / 2}px;
            ${b !== 0 ? `}` : ''}`;
          if (s !== false) {
            const min = b !== 0 ? `(min-width: ${b}px)` : '';
            const max = nb !== false ? `(max-width: ${nb - 1}px)` : '';
            const doubleQuery = min !== '' && max !== '';
            const useQuery = min !== '' || max !== '';
            mediaQuery += `
              ${useQuery ? `@media ${min} ${doubleQuery ? 'and' : ''} ${max} {` : ''}
                &:nth-of-type(n+${s + 1}){
                  display: none;
                }  
              ${useQuery ? '}' : ''}
                `;
          }
          return mediaQuery;
        })
        .join('')}
    `;
    if (typeof c.props.className !== 'undefined') {
      className += ` ${c.props.className}`;
    }
    globalCount += 1;
    return cloneElement(c, { className, 'data-columns': undefined, key: `gi-${globalCount}` });
  }

  return (
    // @ts-ignore
    <div style={style}>
      <div className={gridClassname({ breakpoints, columns, slices, childColumns })}>
        {({ css }) => {
          // @ts-ignore
          globalCss = css;
          if (children.length === undefined) return [children];
          // @ts-ignore
          return (children.length === undefined ? [children] : children).map(handleChild);
        }}
      </div>
    </div>
  );
}

export default Grid;
