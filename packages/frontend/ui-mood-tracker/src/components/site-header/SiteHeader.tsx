import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown, Header, Menu } from 'semantic-ui-react';

import { UserActions } from '../../store/user/types';
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
  const [currentUser, setCurrentUser] = useState('');
  const location = useLocation();

  const isAuthenticated = user ? !!user.accessToken : false;

  const updateLanguage = () => {
    const { language } = i18n;
    i18n.changeLanguage(language === LocaleEnum.English ? LocaleEnum.Deutsche : LocaleEnum.English);
  };

  const logout = () => {
    dispatch({
      type: UserActions.LOGOUT_USER,
    });
  };

  useEffect(() => {
    const username = user.decodedAccessToken ? user.decodedAccessToken.username : '';
    setCurrentUser(username);
  }, [user]);

  return (
    <Menu pointing secondary className="site-header">
      <Menu.Item header>
        <Header as="h3">{t('header')}</Header>
      </Menu.Item>
      {isAuthenticated && (
        <Menu.Item active={location.pathname === '/mood-entry' || location.pathname === '/'}>
          <Link to="/mood-entry">{t('moodEntry')}</Link>
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
          <Dropdown id="toggle-menu" item text={currentUser}>
            <Dropdown.Menu>
              <Dropdown.Item>{t('menu.actions.location')}</Dropdown.Item>
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
    </Menu>
  );
};

export default SiteHeader;
