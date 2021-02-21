import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button, Header, List } from 'semantic-ui-react';
import { MoodState } from 'src/store/mood/types';

const MoodList = () => {
  const { t } = useTranslation(['MoodEntry']);

  const moods = useSelector((state: MoodState) => state.mood);

  return (
    <article className="mood-entry__list">
      <Header as="h3">{t('entries')}</Header>

      <List divided verticalAlign="middle">
        {moods.map((mood: any) => {
          return (
            <List.Item key={mood.moodEntity_id}>
              <List.Content floated="right">
                <Button basic color="grey">
                  {t('buttons.edit')}
                </Button>

                <Button basic color="red">
                  {t('buttons.delete')}
                </Button>
              </List.Content>

              <List.Content>{mood.moodEntity_status}</List.Content>
            </List.Item>
          );
        })}
      </List>
    </article>
  );
};

export default MoodList;
