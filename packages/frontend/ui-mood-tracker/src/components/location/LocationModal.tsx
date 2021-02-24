import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { UserActions } from '../../store/user/types';

const LocationModal = (props: any) => {
  const dispatch = useDispatch();
  const { displayModal, closeModal } = props;
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
    <Modal closeIcon open={displayModal} onClose={closeModal}>
      <Header icon="archive" content={t('header')} />
      <Modal.Actions>
        <Button color="red" onClick={setLocationDenied}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={loadLocation}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LocationModal;
