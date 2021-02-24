import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { MoodActions } from '../../../store/mood/types';

const DeleteEntryModal = (props: any) => {
  const { displayModal, closeModal, mood } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation(['MoodEntry']);

  const deleteMoodEntry = () => {
    const payload = {
      id: props.mood.mood_id,
    };
    dispatch({
      type: MoodActions.DELETE_MOOD,
      payload,
    });
    closeModal();
  };

  return (
    <Modal closeIcon open={displayModal} onClose={closeModal}>
      <Header icon="archive" content={t('header')} />
      <Modal.Content>
        <div>{mood.mood_status}</div>
        <div>{mood.mood_intensity}</div>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={closeModal}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={deleteMoodEntry}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteEntryModal;
