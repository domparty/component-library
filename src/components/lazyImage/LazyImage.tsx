import React from 'react';
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { useInView } from 'react-intersection-observer';

export default function LazyImage({ height, width, src, backgroundColor = '#ffffff', ...rest }) {
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div
      ref={!supportsLazyLoading ? ref : undefined}
      style={{
        position: 'relative',
        paddingBottom: `${(height / width) * 100}%`,
        background: backgroundColor,
      }}
    >
      {inView || supportsLazyLoading ? (
        <img
          {...rest}
          src={src}
          width={width}
          height={height}
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      ) : null}
    </div>
  );
}
