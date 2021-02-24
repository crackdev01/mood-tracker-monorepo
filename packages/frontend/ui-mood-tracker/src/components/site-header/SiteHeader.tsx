import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown, Header, Menu } from 'semantic-ui-react';

import LocationModal from '../location/LocationModal';
import { Coordinates, UserActions } from '../../store/user/types';
import { ApplicationState } from '../../store';

import './site-header.scss';

enum LocaleEnum {
  English = 'en',
  Deutsche = 'de',
}

const SiteHeader = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation(['SiteHeader']);
  const user = useSelector((state: ApplicationState) => state.userReducer.user);
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);

  const isAuthenticated = user ? !!user.accessToken : false;

  const closeLocationModal = () => setShowLocationModal(false);

  const updateLanguage = () => {
    const { language } = i18n;
    i18n.changeLanguage(language === LocaleEnum.English ? LocaleEnum.Deutsche : LocaleEnum.English);
  };

  const currentCoordinates = () => {
    if (user.location === UserActions.SET_LOCATION_ERROR) {
      return 'Error setting your location.';
    } else if (user.location === UserActions.SET_LOCATION_DENIED) {
      return 'Location permission not provided';
    } else if (user.location === undefined) {
      return 'Location permission not provided';
    } else {
      const location = user.location as Coordinates;
      return `${location.latitude} | ${location.longitude}`;
    }
  };

  const logout = () => {
    dispatch({
      type: UserActions.LOGOUT_USER,
    });
  };

  useEffect(() => {
    const username = user.decodedAccessToken ? user.decodedAccessToken.username : '';
    setCurrentUser(username ? username[0].toUpperCase() : username);
  }, [user]);

  return (
    <Menu pointing secondary className="site-header">
      <Menu.Item header>
        <Header as="h3">{t('header')}</Header>
      </Menu.Item>
      {isAuthenticated && (
        <Menu.Item active={location.pathname === '/mood-entry' || location.pathname === '/'}>
          <Link id="mood-entry" to="/mood-entry">
            {t('moodEntry')}
          </Link>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Item active={location.pathname === '/statistics'}>
          <Link id="statistics" to="/statistics">
            {t('statistics')}
          </Link>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Menu position="right">
          <Menu.Item position="right">{currentCoordinates()}</Menu.Item>
          <Dropdown id="toggle-menu" item text={currentUser}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setShowLocationModal(true)}>
                {t('menu.actions.location')}
              </Dropdown.Item>
              <Dropdown.Item id="change-language" onClick={updateLanguage}>
                {t('menu.actions.changeLanguage')}
              </Dropdown.Item>
              <Dropdown.Item id="logout" onClick={logout}>
                {t('menu.actions.logout')}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      )}
      {isAuthenticated && (
        <LocationModal displayModal={showLocationModal} closeModal={closeLocationModal} />
      )}
    </Menu>
  );
};

export default SiteHeader;
