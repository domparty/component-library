import React, { useState, useEffect } from 'react';
import { styled } from 'goober';

interface SnackbarProps {
  children: React.ReactChild;
  persistent?: boolean;
  inline?: boolean;
  actionLabel?: string | boolean;
  actionClick?: () => void;
  visibleTime?: number | null;
  background?: string;
  textColor?: string;
  actionColor?: string;
  fadeOutTime?: number;
  width?: number | string;
}

interface SnackbarWrapperProps {
  background: string;
  textColor: string;
  inline: boolean;
  visible: boolean;
  fadeOutTime: number;
  width: number | string;
}

const SnackbarWrapper = styled<SnackbarWrapperProps>('div')`
  ${(props) =>
    props.inline === false
      ? `
    position: fixed;
    bottom: 10px;
    margin: 0 auto;
  `
      : ''}
  width: calc(100% - 120px);
  @media (min-width: 600px) {
    ${(props) => (props.inline === false ? 'right: 10px' : '')};
    width: ${(props) =>
      typeof props.width === 'string'
        ? props.width.indexOf('%') > -1
          ? props.width
          : `${props.width}px`
        : `${props.width}px`};
  }
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity ${(props) => props.fadeOutTime}ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
  border-radius: 8px;
  padding: 14px 20px;
  color: ${(props) => props.textColor};
  background: ${(props) => props.background};
`;

interface SnackbarActionProps {
  onClick: () => void;
  color: string;
}

interface SnackbarInnerProps {
  fullWidth: boolean;
}

const SnackbarInner = styled<SnackbarInnerProps>('div')`
  width: ${(props) => (props.fullWidth ? '100%' : 'calc(100% - 100px)')};
`;

const SnackbarAction = styled<SnackbarActionProps>('div')`
  width: 100px;
  color: ${(props) => props.color};
  font-weight: bold;
  cursor: pointer;
  text-align: right;
`;

function Snackbar({
  children,
  persistent = false,
  inline = false,
  actionLabel = 'Dismiss',
  actionClick = () => {},
  visibleTime = 3000,
  background = '#323232',
  textColor = '#ffffff',
  actionColor = '#ffffff',
  fadeOutTime = 200,
  width = 400,
}: SnackbarProps) {
  const [visible, setVisible] = useState(false);
  const [innerVisible, setInnerVisible] = useState(true);

  useEffect(() => {
    if (visibleTime !== null && persistent === false) {
      window.setTimeout(fadeOut, visibleTime + fadeOutTime);
    }

    window.setTimeout(() => setVisible(true), fadeOutTime);
  }, []);

  function fadeOut() {
    setVisible(false);
    window.setTimeout(() => setInnerVisible(false), fadeOutTime);
  }

  function onActionClick() {
    fadeOut();
    if (typeof actionClick === 'function') actionClick();
  }

  return (
    innerVisible && (
      <SnackbarWrapper
        width={width}
        visible={visible}
        fadeOutTime={fadeOutTime}
        inline={inline}
        textColor={textColor}
        background={background}
      >
        <SnackbarInner fullWidth={actionLabel === false}>{children}</SnackbarInner>
        {actionLabel && (
          <SnackbarAction color={actionColor} onClick={onActionClick}>
            {actionLabel}
          </SnackbarAction>
        )}
      </SnackbarWrapper>
    )
  );
}

export default Snackbar;
