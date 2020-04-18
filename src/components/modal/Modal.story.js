import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Hero from '../../storybook/Hero';
import Example from '../../storybook/Example';
import Description from '../../storybook/Description';
import Page from '../../storybook/Page';
import Modal from './Modal';
import lipsum from '../../storybook/lipsum';
import { css } from 'goober';

const example = `
const [visible, setVisible] = useState(false);

<button onClick={() => setVisible(true)}>Show modal</button>
<Modal
  className="modal-width-height"
  onClose={() => setVisible(false)}
  visible={visible}
>
  {({ close }) => (
    <div>
      ${lipsum}
      <button
        className="button-class"
        onClick={close}
      >
        close
      </button>
    </div>
  )}
</Modal>
`;

const interfaces = `
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
`;

storiesOf('@domparty|Components', module).add('Modal', (data) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Hero data={data} title="Modal component" />

      <Page>
        <Description>{lipsum}</Description>

        <Example title="Modal" code={example} interfaces={interfaces}>
          <button onClick={() => setVisible(true)}>Show modal</button>
          <Modal
            className={css`
              width: 400px;
              height: 80%;
            `}
            onClose={() => setVisible(false)}
            visible={visible}
          >
            {({ close }) => (
              <>
                <p>{lipsum}</p>
                <p>{lipsum}</p>
                <p>{lipsum}</p>
                <p>{lipsum}</p>
                <button
                  className={css`
                    margin-top: 20px;
                  `}
                  onClick={close}
                >
                  close
                </button>
              </>
            )}
          </Modal>
        </Example>
      </Page>
    </>
  );
});
