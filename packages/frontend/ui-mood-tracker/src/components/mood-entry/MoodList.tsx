import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button, Header, Pagination, Table } from 'semantic-ui-react';
import { MoodState } from '../../store/mood/types';

const MoodList = () => {
  const { t } = useTranslation(['MoodEntry']);
  const moods = useSelector((state: MoodState) => state.mood);

  const [currentPage, setCurrentPage] = useState(1);
  const DEFAULT_PAGE_ENTRIES = 10;
  const pages = moods.length / DEFAULT_PAGE_ENTRIES;
  const [visibleEntries, setVisibleEntries] = useState([]);

  const updatePage = (_: any, data: any) => {
    setCurrentPage(data.activePage);
  };

  useEffect(() => {
    // TODO: update page number and entries.
    setVisibleEntries(moods);
  });

  return (
    <article className="mood-entry__list">
      <Header as="h3">{t('entries')}</Header>

      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Entered At</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Intensity</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {visibleEntries.map((mood: any) => {
            return (
              <Table.Row key={mood.moodEntity_id}>
                <Table.Cell>{mood.moodEntity_enteredAt}</Table.Cell>
                <Table.Cell>{mood.moodEntity_status}</Table.Cell>
                <Table.Cell>{mood.moodEntity_intensity}</Table.Cell>
                <Table.Cell>
                  <Button basic color="grey">
                    {t('buttons.edit')}
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button basic color="red">
                    {t('buttons.delete')}
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Pagination
                floated="right"
                defaultActivePage={currentPage}
                totalPages={pages}
                onPageChange={updatePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </article>
  );
};

export default MoodList;
