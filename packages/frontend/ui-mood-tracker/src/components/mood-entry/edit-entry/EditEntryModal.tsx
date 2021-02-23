import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { MoodActions } from '../../../store/mood/types';

const EditEntryModal = (props: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['MoodEntry']);
  const [showModal, setShowModal] = useState(false);
  // TODO: Repeated code. Extract it to common file.
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
  const [moodStatus, setMoodStatus] = useState('');
  const [moodIntensity, setMoodIntensity] = useState('');

  const addEntry = (_: any, data: any) => {
    setMoodStatus(data.value);
  };

  const addIntensity = (_: any, data: any) => {
    setMoodIntensity(data.value);
  };

  const editMoodEntry = () => {
    const payload = {
      id: props.mood.mood_id,
      status: moodStatus,
      intensity: moodIntensity,
    };
    dispatch({
      type: MoodActions.EDIT_MOOD,
      payload,
    });
    setShowModal(false);
  };

  useEffect(() => {
    const { displayModal, mood } = props;
    setShowModal(displayModal);
    setMoodStatus(mood.mood_status);
    setMoodIntensity(mood.mood_intensity);
  }, [props]);

  return (
    <Modal closeIcon open={showModal} onClose={() => setShowModal(false)}>
      <Header icon="archive" content={t('header')} />
      <Modal.Content>
        <Dropdown
          placeholder={t('moodStatus.placeholder')}
          fluid
          selection
          options={moodStatusOptions}
          onChange={addEntry}
          defaultValue={moodStatus}
        />
        <Dropdown
          placeholder={t('intensity.placeholder')}
          fluid
          selection
          options={intensityOptions}
          onChange={addIntensity}
          defaultValue={moodIntensity}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setShowModal(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={editMoodEntry}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditEntryModal;
