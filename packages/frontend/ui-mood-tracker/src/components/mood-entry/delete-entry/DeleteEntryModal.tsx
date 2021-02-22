import React, { useEffect, useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { MoodActions } from '../../../store/mood/types';

const DeleteEntryModal = (props: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['MoodEntry']);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const { displayModal } = props;
    setShowModal(displayModal);
  }, [props]);

  const triggerDispatch = () => {
    const payload = {
      id: props.mood.mood_id,
    };
    dispatch({
      type: MoodActions.DELETE_MOOD,
      payload,
    });
    // setShowModal(false);
  };

  return (
    <Modal closeIcon open={showModal} onClose={() => setShowModal(false)}>
      <Header icon="archive" content={t('header')} />
      <Modal.Content>
        <div>{props.mood.mood_status}</div>
        <div>{props.mood.mood_intensity}</div>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setShowModal(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={triggerDispatch}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteEntryModal;
