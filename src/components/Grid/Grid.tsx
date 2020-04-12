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
    margin: -(gap / 2),
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
          const dataColumns = c.props['data-columns'] || 1;

          const gapDivided = gap / 2;

          const marginLeft = gapDivided;
          const marginRight = gapDivided;

          const widthEach = 100 / columnAmount;

          return `
            @media(min-width: ${bp}px) {
              width: calc(${widthEach * dataColumns}% - ${gap}px);
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
