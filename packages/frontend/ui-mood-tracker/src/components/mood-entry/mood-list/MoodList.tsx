import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Header, Icon, Pagination, Table } from 'semantic-ui-react';

import EditEntryModal from '../../../components/mood-entry/edit-entry/EditEntryModal';
import DeleteEntryModal from '../../../components/mood-entry/delete-entry/DeleteEntryModal';
import { ApplicationState } from '../../../store';
import { Mood } from '../../../mood.types';

const MoodList = () => {
  const { t } = useTranslation(['MoodEntry']);
  const moods = useSelector((state: ApplicationState) => state.moodReducer.mood);
  const DEFAULT_PAGE_ENTRIES = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleEntries, setVisibleEntries] = useState([]);
  const [showEditEntryModal, setShowEditEntryModal] = useState(false);
  const [showDeleteEntryModal, setShowDeleteEntryModal] = useState(false);
  const [editableMood, setEditableMood] = useState({});
  const [deletableMood, setDeletableMood] = useState({});
  const pages = Math.ceil(moods.length / DEFAULT_PAGE_ENTRIES);

  const updatePage = (_: any, data: any) => {
    console.log('updating page');
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

  const editEntry = (mood: any) => {
    setEditableMood(mood);
    setShowEditEntryModal(true);
  };

  const closeEditModal = () => setShowEditEntryModal(false);

  const deleteEntry = (mood: Mood) => {
    setDeletableMood(mood);
    setShowDeleteEntryModal(true);
  };

  const closeDeleteModal = () => setShowDeleteEntryModal(false);

  useEffect(() => {
    updateVisibleEntries();
  }, [currentPage, moods]);

  return (
    <article className="mood-entry__list">
      <Header as="h3">{t('entries')}</Header>

      <Table singleLine className="mood-entry__list__table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{t('table.headers.enteredAt')}</Table.HeaderCell>
            <Table.HeaderCell>{t('table.headers.status')}</Table.HeaderCell>
            <Table.HeaderCell>{t('table.headers.intensity')}</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {visibleEntries.map((mood: Mood) => {
            return (
              <Table.Row key={mood.mood_id}>
                <Table.Cell>{dayjs(mood.mood_enteredAt).format('MMM D, YYYY h:mm A')}</Table.Cell>
                <Table.Cell>{t(`moodStatus.${mood.mood_status}`)}</Table.Cell>
                <Table.Cell>{mood.mood_intensity}</Table.Cell>
                <Table.Cell>
                  <Icon name="pencil" size="large" onClick={() => editEntry(mood)} />
                </Table.Cell>
                <Table.Cell>
                  <Icon name="delete" color="red" size="large" onClick={() => deleteEntry(mood)} />
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

      <EditEntryModal
        displayModal={showEditEntryModal}
        closeModal={closeEditModal}
        mood={editableMood}
      />

      <DeleteEntryModal
        displayModal={showDeleteEntryModal}
        closeModal={closeDeleteModal}
        mood={deletableMood}
      />
    </article>
  );
};

export default MoodList;
