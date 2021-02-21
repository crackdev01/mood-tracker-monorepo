import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Header } from 'semantic-ui-react';

import AddEntry from '../../components/mood-entry/add-entry/AddEntry';
import MoodList from '../../components/mood-entry/mood-list/MoodList';
import { MoodActions } from '../../store/mood/types';

import './mood-entry.scss';

const MoodEntry = () => {
  const { t } = useTranslation(['MoodEntry']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: MoodActions.FETCH_MOODS,
    });
  });

  return (
    <article className="mood-entry">
      <section className="mood-entry__header">
        <Header as="h2">{t('header')}</Header>

        <Header as="h3">{t('description')}</Header>
      </section>

      <AddEntry />

      <MoodList />
    </article>
  );
};

export default MoodEntry;
