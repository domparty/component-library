import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { styled, css } from 'goober';

const selector = 'domparty-portal';

interface BackdropInterface {
  background: string;
  onClick: () => void;
}

interface InnerInterface {
  className?: string;
}

const Backdrop = styled<BackdropInterface>('div')`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.background ? props.background : 'rgba(0, 0, 0, 0.3)')};
  position: absolute;
`;

const ModalWrapper = styled('div')`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalInner = styled<InnerInterface>('div')`
  background: white;
  padding: 20px;
  overflow: scroll;
  z-index: 110;
`;

const bodyClass = css`
  overflow: hidden;
`;

function Portal({ children, domNode, background, close, className }) {
  return createPortal(
    <>
      <ModalWrapper>
        <Backdrop onClick={close} background={background}>
          {null}
        </Backdrop>
        <ModalInner className={className}>{children}</ModalInner>
      </ModalWrapper>
    </>,
    domNode
  );
}

type ModalRenderProps = {
  close: (callback) => void;
};

interface ModalProps {
  children: (ModalRenderProps) => React.ReactElement;
  onClose: () => any;
  visible: boolean;
  background?: string;
  className?: string;
}

export default function Modal({
  children,
  visible = false,
  onClose = () => {},
  background,
  className,
}: ModalProps) {
  const [innerVisible, setInnerVisible] = useState<boolean>(visible);
  const [domNode, setDomNode] = useState<HTMLElement | null>(null);

  // Create required div and handle escape key
  useEffect(() => {
    let div = document.getElementById(selector);
    if (div === null) {
      div = document.createElement('div');
      div.id = selector;
      document.body.append(div);
    }

    setDomNode(div);

    function listenForEscape(e) {
      if (e.keyCode === 27) close();
    }

    document.addEventListener('keyup', listenForEscape);
    return function cleanup() {
      document.removeEventListener('keyup', listenForEscape);
    };
  }, []);

  // Listen to visible changes
  useEffect(() => {
    if (visible) document.body.classList.add(bodyClass);
    if (visible === false) document.body.classList.remove(bodyClass);

    setInnerVisible(visible);
  }, [visible]);

  function close() {
    setInnerVisible(false);
    if (typeof onClose === 'function') onClose();
  }

  return (
    domNode &&
    innerVisible &&
    Portal({ children: children({ close }), domNode, background, close, className })
  );
}
