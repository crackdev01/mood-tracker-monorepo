import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Header } from 'semantic-ui-react';

import AddEntryModal from '../../components/mood-entry/add-entry/AddEntryModal';
import MoodList from '../../components/mood-entry/mood-list/MoodList';

import './mood-entry.scss';
import { ApplicationState } from '../../store';
import { MoodActions } from '../../store/mood/types';

const MoodEntry = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['MoodEntry']);
  const user = useSelector((state: ApplicationState) => state.userReducer.user);

  const triggerFetchMoodEntries = () => {
    if (user.accessToken) {
      dispatch({
        type: MoodActions.FETCH_MOODS,
      });
    }
  };

  useEffect(() => {
    triggerFetchMoodEntries();
  }, [user]);

  return (
    <article className="mood-entry">
      <section className="mood-entry__header">
        <Header as="h2">{t('header')}</Header>

        <Header as="h3">{t('description')}</Header>
      </section>

      <AddEntryModal />

      <MoodList />
    </article>
  );
};

export default MoodEntry;
