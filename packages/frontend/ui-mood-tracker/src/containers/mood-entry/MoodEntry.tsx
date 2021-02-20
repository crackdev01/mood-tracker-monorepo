import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dropdown, Header, List } from 'semantic-ui-react';

import './mood-entry.scss';

function MoodEntry() {
  const { t } = useTranslation(['MoodEntry']);
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
  const [intensity, setIntensity] = useState(0);
  const loading = false;

  return (
    <article className="mood-entry">
      <section className="mood-entry__header">
        <Header as="h2">{t('header')}</Header>

        <Header as="h3">{t('description')}</Header>
      </section>

      <article className="mood-entry__add">
        <section className="mood-entry__add__options">
          <div>
            <Dropdown
              placeholder={t('moodStatus.placeholder')}
              fluid
              selection
              options={moodStatusOptions}
            />
          </div>

          <div>
            <Dropdown
              placeholder={t('intensity.placeholder')}
              fluid
              selection
              options={intensityOptions}
            />
          </div>

          <div>
            <Button loading={loading} basic color="olive">
              {t('buttons.add')}
            </Button>
          </div>
        </section>
      </article>

      <article className="mood-entry__list">
        <Header as="h3">{t('entries')}</Header>

        <List divided verticalAlign="middle">
          <List.Item>
            <List.Content floated="right">
              <Button basic color="grey">
                {t('buttons.edit')}
              </Button>

              <Button basic color="red">
                {t('buttons.delete')}
              </Button>
            </List.Content>

            <List.Content verticalAlign="bottom">Entry 2</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated="right">
              <Button basic color="grey">
                {t('buttons.edit')}
              </Button>

              <Button basic color="red">
                {t('buttons.delete')}
              </Button>
            </List.Content>

            <List.Content verticalAlign="bottom">Entry 2</List.Content>
          </List.Item>
        </List>
      </article>
    </article>
  );
}

export default MoodEntry;
