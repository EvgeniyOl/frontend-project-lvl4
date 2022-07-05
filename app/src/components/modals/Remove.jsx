import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import useChatApi from '../../hooks/useChatApi.jsx';
import { hideModal } from '../../slices/modalsSlice.js';

function Remove() {
  const { t } = useTranslation('translation', { keyPrefix: 'modals' });
  const [disabled, setDisabled] = useState(false);
  const { removeCurrentChannel } = useChatApi();
  const currentChannel = useSelector((state) => state.modals.item);
  const dispatch = useDispatch();
  const deleteChannel = (e) => {
    e.preventDefault();
    setDisabled(true);
    removeCurrentChannel(currentChannel);
    setDisabled(false);
  };
  return (
    <Modal show onHide={() => dispatch(hideModal())}>
      <Modal.Header closeButton>
        <Modal.Title>{t('remove')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span className="lead">{t('removeConfirmation')}</span>
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            type="button"
            onClick={() => dispatch(hideModal())}
            className="me-2"
          >
            {t('buttons.cancel')}
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={deleteChannel}
            disabled={disabled}
          >
            {t('buttons.delete')}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default Remove;
