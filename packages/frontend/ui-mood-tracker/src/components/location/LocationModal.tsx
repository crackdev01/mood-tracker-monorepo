import React, { useEffect, useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const LocationModal = () => {
  const { t } = useTranslation(['LocationModal']);
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(false);
  };

  useEffect(() => {
    // TODO: Setup location state in user module of store and hide/show modal based on that.
    // setShowModal(true);
  }, []);

  return (
    <Modal
      closeIcon
      open={showModal}
      onClose={() => setShowModal(false)}
      onOpen={() => setShowModal(true)}
    >
      <Header icon="archive" content={t('header')} />
      <Modal.Actions>
        <Button color="red" onClick={() => setShowModal(false)}>
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
