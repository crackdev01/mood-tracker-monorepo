import React from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { MoodActions } from '../../../store/mood/types';

import './_delete-entry.scss';

const DeleteEntryModal = (props: { displayModal: boolean; closeModal: any; mood: any }) => {
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
    <Modal className="delete-entry" closeIcon open={displayModal} onClose={closeModal} size="tiny">
      <Header icon="delete" content={t('header')} />
      <Modal.Content className="delete-entry__content">
        <h4>{t('deleteEntry.header')}</h4>
        <div>
          <b>{t('table.headers.status')}: </b>
          {mood.mood_status}
        </div>
        <div>
          <b>{t('table.headers.intensity')}: </b>
          {mood.mood_intensity}
        </div>
        <div>
          <b>{t('table.headers.enteredAt')}: </b>
          {dayjs(mood.mood_enteredAt).format('MMM D, YYYY h:mm A')}
        </div>
      </Modal.Content>
      <Modal.Actions className="delete-entry__actions">
        <Button className="delete-entry__actions__yes" color="green" onClick={deleteMoodEntry}>
          <Icon name="checkmark" /> {t('buttons.yes')}
        </Button>
        <Button className="delete-entry__actions__no" onClick={closeModal}>
          <Icon name="remove" /> {t('buttons.no')}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteEntryModal;
