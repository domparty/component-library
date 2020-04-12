import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import { styled } from 'goober';
import './styles/prism.css';

const Pre = styled('pre')`
  padding: 20px;
  width: 100%;
  display: block;
  background: 'black';
  border-bottom: 1px solid #f2f2f2;
  font-size: 0.9em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export default function Code({ children, type = 'jsx' }) {
  const [codeHtml, setCodeHtml] = useState(false);
  const c = useRef(children);

  useEffect(() => {
    const html = Prism.highlight(c.current.replace(/^\n/, ''), Prism.languages[type], type);
    setCodeHtml(html);
  });

  return (
    codeHtml && (
      <>
        <Pre className="language-typescript">
          <code className="language-typescript" dangerouslySetInnerHTML={{ __html: codeHtml }} />
        </Pre>
      </>
    )
  );
}
