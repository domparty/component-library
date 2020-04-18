import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'goober';

const selector = 'domparty-portal';

interface WrapperInterface {
  background: string;
  onClick: () => void;
}

interface InnerInterface {
  padding: number;
  className?: string;
}

const ModalWrapper = styled<WrapperInterface>('div')`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.background ? props.background : 'rgba(0, 0, 0, 0.3)')};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalInner = styled<InnerInterface>('div')`
  background: white;
  padding: ${(props) => props.padding || 20}px;
`;

function Portal({ children, domNode, background, padding, close, className }) {
  return createPortal(
    <ModalWrapper onClick={close} background={background}>
      <ModalInner className={className} padding={padding}>
        {children}
      </ModalInner>
    </ModalWrapper>,
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
  padding?: number;
  className?: string;
}

export default function Modal({
  children,
  visible = false,
  onClose = () => {},
  background,
  padding,
  className,
}: ModalProps) {
  const [innerVisible, setInnerVisible] = useState<boolean>(visible);
  const [domNode, setDomNode] = useState<HTMLElement | null>(null);

  // Create required div
  useEffect(() => {
    let div = document.getElementById(selector);
    if (div === null) {
      div = document.createElement('div');
      div.id = selector;
      document.body.append(div);
    }

    setDomNode(div);
  }, []);

  // Listen to visible changes
  useEffect(() => setInnerVisible(visible), [visible]);

  // Handle escape key
  useEffect(() => {
    function listenForEscape(e) {
      if (e.keyCode === 27) close();
    }

    document.addEventListener('keyup', listenForEscape);
    return function cleanup() {
      document.removeEventListener('keyup', listenForEscape);
    };
  }, []);

  function close() {
    setInnerVisible(false);
    if (typeof onClose === 'function') onClose();
  }

  return (
    domNode &&
    innerVisible &&
    Portal({ children: children({ close }), domNode, background, padding, close, className })
  );
}
