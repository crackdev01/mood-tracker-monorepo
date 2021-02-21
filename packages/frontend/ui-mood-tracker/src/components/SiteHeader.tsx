import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

import '../App.scss';

const SiteHeader = () => {
  const { t } = useTranslation(['SiteHeader']);
  const location = useLocation();

  return (
    <Menu pointing secondary>
      <Menu.Item header>
        <Header as="h3">
          <Link to="login">{t('header')}</Link>
        </Header>
      </Menu.Item>
      <Menu.Item active={location.pathname === '/mood-entry'}>
        <Link to="/mood-entry">{t('moodEntry')}</Link>
      </Menu.Item>
      <Menu.Item active={location.pathname === '/statistics'}>
        <Link to="/statistics">{t('statistics')}</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SiteHeader;
