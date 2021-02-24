import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const LocationModal = (props: any) => {
  const { displayModal, closeModal } = props;
  const { t } = useTranslation(['LocationModal']);
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });

  const loadLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        setCoordinates({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        })
      );
    }
    closeModal();
  };

  return (
    <Modal closeIcon open={displayModal} onClose={closeModal}>
      <Header icon="archive" content={t('header')} />
      <Modal.Actions>
        <Button color="red" onClick={closeModal}>
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
