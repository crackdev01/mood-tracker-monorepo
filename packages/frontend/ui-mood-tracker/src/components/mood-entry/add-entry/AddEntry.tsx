import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button, Dropdown } from 'semantic-ui-react';

import { MoodActions } from '../../../store/mood/types';
import { ApplicationState } from '../../../store';

const AddEntry = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['MoodEntry']);
  const user = useSelector((state: ApplicationState) => state.userReducer.user);
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
      value: 0,
    },
    {
      key: '1',
      text: '1',
      value: 1,
    },
    {
      key: '2',
      text: '2',
      value: 2,
    },
    {
      key: '3',
      text: '3',
      value: 3,
    },
    {
      key: '4',
      text: '4',
      value: 4,
    },
  ];
  const [showAddEntry, setShowAddEntry] = useState(false);
  const [moodStatus, setMoodStatus] = useState('');
  const [moodIntensity, setMoodIntensity] = useState('');

  const addEntry = (_: any, data: any) => {
    setShowAddEntry(true);
    setMoodStatus(data.value);
  };

  const addIntensity = (_: any, data: any) => {
    setMoodIntensity(data.value);
  };

  const triggerDispatch = () => {
    const payload = {
      user: user.uuid,
      status: moodStatus,
      intensity: moodIntensity,
    };
    dispatch({
      type: MoodActions.ADD_MOOD,
      payload,
    });
  };

  return (
    <article className="mood-entry__add">
      <section className="mood-entry__add__options">
        <div>
          <Dropdown
            placeholder={t('moodStatus.placeholder')}
            fluid
            selection
            options={moodStatusOptions}
            onChange={addEntry}
          />
        </div>

        {showAddEntry && (
          <div>
            <Dropdown
              placeholder={t('intensity.placeholder')}
              fluid
              selection
              options={intensityOptions}
              onChange={addIntensity}
            />

            <div>
              <Button basic color="olive" onClick={triggerDispatch}>
                {t('buttons.add')}
              </Button>
            </div>
          </div>
        )}
      </section>
    </article>
  );
};

export default AddEntry;
