import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { UserActions } from '../../store/user/types';

import './_location-entry.scss';

const LocationModal = (props: { displayModal: boolean; closeModal: any }) => {
  const { displayModal, closeModal } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation(['LocationModal']);
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });

  const setLocationSuccess = (position: any) => {
    setCoordinates({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
    dispatch({
      type: UserActions.SET_LOCATION_SUCCESS,
      payload: coordinates,
    });
  };

  const setLocationError = () => {
    dispatch({
      type: UserActions.SET_LOCATION_ERROR,
    });
    closeModal();
  };

  const setLocationDenied = () => {
    dispatch({
      type: UserActions.SET_LOCATION_DENIED,
    });
    closeModal();
  };

  const loadLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLocationSuccess, setLocationError, {
        timeout: 30000,
        maximumAge: 75000,
      });
    }
    closeModal();
  };

  return (
    <Modal
      className="location-entry"
      closeIcon
      open={displayModal}
      onClose={closeModal}
      size="tiny"
    >
      <Header icon="location arrow" content={t('header')} />
      <Modal.Content>
        <h4>{t('description')}</h4>
      </Modal.Content>
      <Modal.Actions className="location-entry__actions">
        <Button className="location-entry__actions__yes" onClick={loadLocation}>
          <Icon name="checkmark" /> Yes
        </Button>
        <Button onClick={setLocationDenied}>
          <Icon name="remove" /> No
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LocationModal;
