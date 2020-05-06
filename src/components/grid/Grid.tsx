import React, { cloneElement, ReactElement } from 'react';
import { css } from 'goober';

export interface GridProps {
  children: ReactElement[];
  breakpoints?: number[];
  columns?: null | number | number[];
  gap?: number;
  fullHeight?: boolean;
  style?: {};
  slices?: any;
  className?: string | null;
}

export default function Grid({
  children,
  breakpoints = [],
  columns = null,
  gap = 0,
  fullHeight = false,
  style: innerStyle = {},
  className = null,
}: GridProps) {
  if (typeof children === 'undefined') return null;
  const childs = Array.isArray(children) === false ? [children] : children;
  if (breakpoints.length !== 0 && breakpoints[0] !== 0) breakpoints.unshift(0);

  if (columns === null) columns = 1;

  const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: -(gap / 2),
    width: '100%',
    ...innerStyle,
    ...(fullHeight
      ? {
          position: 'relative',
          height: `calc(100% + ${gap}px)`,
        }
      : {}),
  };

  function renderChild(c) {
    const dataColumns = c.props['data-columns'] || 1;
    const externalClassname = c.props['className'] || false;

    const className = css`
      ${typeof columns === 'number'
        ? `
        width: calc(${(100 / columns) * dataColumns}% - ${gap}px);
        margin: ${gap / 2}px;
      `
        : ''}
      ${breakpoints
        .map((bp, i) => {
          const columnAmount =
            Array.isArray(columns) && typeof columns[i] !== 'undefined' ? columns[i] : 1;
          const gapDivided = gap / 2;
          const marginLeft = gapDivided;
          const marginRight = gapDivided;
          const widthEach = 100 / columnAmount;
          return `
            ${bp === 0 ? '' : `@media(min-width: ${bp}px) {`}
              width: calc(${widthEach * dataColumns}% - ${gap}px);
              margin-bottom: ${gapDivided}px;
              margin-top: ${gapDivided}px;
              margin-left: ${marginLeft}px;
              margin-right: ${marginRight}px;
            ${bp === 0 ? '' : '}'}
          `;
        })
        .join('')}
    `;

    return cloneElement(c, {
      className: `${className}${externalClassname ? ` ${externalClassname}` : ''}`,
    });
  }

  const wrapperProps = {
    ...(className ? { className, style: wrapperStyle } : { style: wrapperStyle }),
  };

  return (
    // @ts-ignore
    <div {...wrapperProps}>{childs.map(renderChild)}</div>
  );
}
