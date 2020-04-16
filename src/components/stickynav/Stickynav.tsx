import React, { useEffect, useState, useRef, ReactNode } from 'react';

interface StickynavProps {
  children: ReactNode;
  stopAtSelector: string;
  offset?: number;
}

export default function Stickynav({ children, stopAtSelector, offset = 0 }: StickynavProps) {
  const wrapperRef = useRef(null);
  const spanRef = useRef(null);
  const stickyStyles = useRef({ position: 'fixed', top: offset });

  const [sticky, setSticky] = useState(false);
  const [stickyAtBottom, setStickyAtBottom] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (wrapperRef.current !== null && spanRef.current !== null) {
        const scrollUntilEl = document.querySelector(stopAtSelector);

        if (scrollUntilEl === null) return;

        const { pageYOffset } = window;
        // @ts-ignore
        const spanY = spanRef.current.offsetTop - pageYOffset;

        const scrollUntilY =
          // @ts-ignore
          scrollUntilEl.offsetTop - pageYOffset - wrapperRef.current.clientHeight - offset;

        if (spanY < offset && sticky === false) {
          return setSticky(true);
        }

        if (spanY > offset && sticky === true) {
          return setSticky(false);
        }

        if (scrollUntilY <= 0 && sticky && stickyAtBottom === false) {
          // @ts-ignore
          setStickyAtBottom(pageYOffset + offset);
        }

        if (stickyAtBottom !== false && scrollUntilY > 0) {
          setStickyAtBottom(false);
        }
      }
    }

    onScroll();

    window.addEventListener('scroll', onScroll);

    return function cleanup() {
      window.removeEventListener('scroll', onScroll);
    };
  }, [offset, sticky, stickyAtBottom]);

  const stickyAtBottomStyles = {
    position: 'absolute',
    top: stickyAtBottom,
  };

  return (
    <>
      <span ref={spanRef} />
      <div
        // @ts-ignore
        style={{
          ...(stickyAtBottom ? stickyAtBottomStyles : sticky ? stickyStyles.current : {}),
        }}
        ref={wrapperRef}
      >
        {children}
      </div>
    </>
  );
}
