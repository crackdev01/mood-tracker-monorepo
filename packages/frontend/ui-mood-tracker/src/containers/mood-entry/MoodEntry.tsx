import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from 'semantic-ui-react';

import AddEntryModal from '../../components/mood-entry/add-entry/AddEntryModal';
import MoodList from '../../components/mood-entry/mood-list/MoodList';

import './mood-entry.scss';

const MoodEntry = () => {
  const { t } = useTranslation(['MoodEntry']);

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
