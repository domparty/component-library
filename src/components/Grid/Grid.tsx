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
  const childs = Array.isArray(children) === false ? [children] : children;
  let globalCount = 0;

  const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    ...innerStyle,
    ...(fullHeight
      ? {
          position: 'relative',
          height: `calc(100% + ${gap}px)`,
        }
      : {}),
  };

  function renderChild(c) {
    const className = css`
      ${typeof columns === 'number' ? `width: ${100 / columns}%;` : ''}
      ${breakpoints
        .map((bp, i) => {
          const columnAmount =
            Array.isArray(columns) && typeof columns[i] !== 'undefined' ? columns[i] : 1;

          const gapDivided = gap / 2;

          const marginLeft = globalCount % columnAmount === 0 ? 0 : gapDivided;
          const marginRight = globalCount % columnAmount === columnAmount - 1 ? 0 : gapDivided;

          const f = columnAmount > 1 ? (columnAmount === 2 ? 0.5 : 1 - 1 / columnAmount) : 0;

          return `
            @media(min-width: ${bp}px) {
              width: calc(${100 / columnAmount}% - ${f * gap}px);
              margin-bottom: ${gapDivided}px;
              margin-top: ${gapDivided}px;
              margin-left: ${marginLeft}px;
              margin-right: ${marginRight}px;
            }
          `;
        })
        .join('')}
    `;

    globalCount += 1;

    return cloneElement(c, { className });
  }

  return (
    // @ts-ignore
    <div style={wrapperStyle}>{childs.map(renderChild)}</div>
  );
}

export default Grid;
