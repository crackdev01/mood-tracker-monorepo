import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Button, Header, Pagination, Table } from 'semantic-ui-react';

import EditEntryModal from '../../../components/mood-entry/edit-entry/EditEntryModal';
import DeleteEntryModal from '../../../components/mood-entry/delete-entry/DeleteEntryModal';
import { ApplicationState } from '../../../store';

const MoodList = () => {
  const { t } = useTranslation(['MoodEntry']);
  const moods = useSelector((state: ApplicationState) => state.moodReducer.mood);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleEntries, setVisibleEntries] = useState([]);
  const [showEditEntryModal, setShowEditEntryModal] = useState(false);
  const [showDeleteEntryModal, setShowDeleteEntryModal] = useState(false);
  const [editableMood, setEditableMood] = useState({});
  const [deletableMood, setDeletableMood] = useState({});
  const DEFAULT_PAGE_ENTRIES = 5;
  const pages = Math.ceil(moods.length / DEFAULT_PAGE_ENTRIES);

  const updatePage = (_: any, data: any) => {
    setCurrentPage(Math.ceil(data.activePage));
  };

  const updateVisibleEntries = () => {
    let min;
    let max;
    if (currentPage === 1) {
      min = 0;
      max = DEFAULT_PAGE_ENTRIES;
    } else {
      max = currentPage * DEFAULT_PAGE_ENTRIES;
      min = max - DEFAULT_PAGE_ENTRIES;
    }
    setVisibleEntries(moods.slice(min, max));
  };

  // FIXME: update types for mood.
  const editEntry = (mood: any) => {
    setShowEditEntryModal(true);
    setEditableMood(mood);
  };

  const deleteEntry = (mood: any) => {
    setShowDeleteEntryModal(true);
    setDeletableMood(mood);
  };

  useEffect(() => {
    updateVisibleEntries();
  }, [currentPage, moods, showEditEntryModal, editableMood, deletableMood]);

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
              <Table.Row key={mood.mood_id}>
                <Table.Cell>{dayjs(mood.mood_enteredAt).format('MMM D, YYYY h:mm A')}</Table.Cell>
                <Table.Cell>{t(`moodStatus.${mood.mood_status}`)}</Table.Cell>
                <Table.Cell>{mood.mood_intensity}</Table.Cell>
                <Table.Cell>
                  <Button basic color="grey" onClick={() => editEntry(mood)}>
                    {t('buttons.edit')}
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button basic color="red" onClick={() => deleteEntry(mood)}>
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

      <EditEntryModal displayModal={showEditEntryModal} mood={editableMood} />

      <DeleteEntryModal displayModal={showDeleteEntryModal} mood={deletableMood} />
    </article>
  );
};

export default MoodList;
