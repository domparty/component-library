import React, { ReactNode } from './node_modules/react';

export interface HtmlProps {
  children: ReactNode;
  className?: string;
  comp?: string;
}

export default function Html({ className, children, comp: C = 'div' }: HtmlProps) {
  if (typeof children === 'string') {
    const tags = ['script', 'style', 'iframe'];
    const regex = `<(${tags.join('|')})[^>]*>.*</(${tags.join('|')})>`;
    children = children.replace(new RegExp(regex), '');
  }

  return (
    // @ts-ignore for dangerouslySetInnerHTML and IntrinsicAttributes
    <C className={className} dangerouslySetInnerHTML={{ __html: children }} />
  );
}
