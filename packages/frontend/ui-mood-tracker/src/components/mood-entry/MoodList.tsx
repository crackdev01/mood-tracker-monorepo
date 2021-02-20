import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Header, List } from 'semantic-ui-react';

function MoodList() {
  const { t } = useTranslation(['MoodEntry']);

  return (
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

          <List.Content>Entry 1</List.Content>
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

          <List.Content>Entry 2</List.Content>
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

          <List.Content>Entry 3</List.Content>
        </List.Item>
      </List>
    </article>
  );
}

export default MoodList;
