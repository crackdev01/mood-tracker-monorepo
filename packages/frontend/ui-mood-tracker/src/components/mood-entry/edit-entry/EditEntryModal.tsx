import React, { useState } from 'react';
import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { MoodActions } from '../../../store/mood/types';

import './_edit-entry.scss';

const EditEntryModal = (props: { displayModal: boolean; closeModal: any; mood: any }) => {
  const { displayModal, closeModal, mood } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation(['MoodEntry']);
  const [moodStatus, setMoodStatus] = useState('');
  const [moodIntensity, setMoodIntensity] = useState('');
  const moodStatusOptions = [
    {
      key: 'relaxed',
      text: t('moodStatus.relaxed'),
      value: 'relaxed',
    },
    {
      key: 'motivated',
      text: t('moodStatus.motivated'),
      value: 'motivated',
    },
    {
      key: 'energetic',
      text: t('moodStatus.energetic'),
      value: 'energetic',
    },
    {
      key: 'curious',
      text: t('moodStatus.curious'),
      value: 'curious',
    },
    {
      key: 'confident',
      text: t('moodStatus.confident'),
      value: 'confident',
    },
  ];
  const intensityOptions = [
    {
      key: '0',
      text: '0',
      value: '0',
    },
    {
      key: '1',
      text: '1',
      value: '1',
    },
    {
      key: '2',
      text: '2',
      value: '2',
    },
    {
      key: '3',
      text: '3',
      value: '3',
    },
    {
      key: '4',
      text: '4',
      value: '4',
    },
  ];

  const addEntry = (_: any, data: any) => {
    setMoodStatus(data.value);
  };

  const addIntensity = (_: any, data: any) => {
    setMoodIntensity(data.value);
  };

  const editMoodEntry = () => {
    const payload = {
      id: mood.mood_id,
      status: moodStatus,
      intensity: moodIntensity,
    };
    dispatch({
      type: MoodActions.EDIT_MOOD,
      payload,
    });
    closeModal();
  };

  return (
    <Modal className="edit-entry" closeIcon open={displayModal} onClose={closeModal} size="tiny">
      <Header icon="pencil" content={t('header')} />
      <Modal.Content className="edit-entry__content">
        <Dropdown
          className="edit-entry__content__dropdown"
          placeholder={t('moodStatus.placeholder')}
          fluid
          selection
          options={moodStatusOptions}
          onChange={addEntry}
          defaultValue={moodStatus}
        />
        <Dropdown
          className="edit-entry__content__dropdown"
          placeholder={t('intensity.placeholder')}
          fluid
          selection
          options={intensityOptions}
          onChange={addIntensity}
          defaultValue={moodIntensity}
        />
      </Modal.Content>
      <Modal.Actions className="edit-entry__actions">
        <Button className="edit-entry__actions__yes" onClick={editMoodEntry}>
          <Icon name="checkmark" /> {t('buttons.yes')}
        </Button>
        <Button className="edit-entry__actions__no" onClick={closeModal}>
          <Icon name="remove" /> {t('buttons.no')}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditEntryModal;
