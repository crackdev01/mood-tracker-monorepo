import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

import '../scss/site-header.scss';

const SiteHeader = () => {
  const { t, i18n } = useTranslation(['SiteHeader']);
  const location = useLocation();

  const updateLanguage = async (locale: 'en' | 'de') => {
    await i18n.changeLanguage(locale);
  };

  return (
    <Menu pointing secondary className="site-header">
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
      <Menu.Item position="right" className="locale">
        <span
          className={i18n.language === 'en' ? 'locale--active' : 'locale--inactive'}
          onClick={() => updateLanguage('en')}
        >
          EN
        </span>
        <span
          className={i18n.language === 'de' ? 'locale--active' : 'locale--inactive'}
          onClick={() => updateLanguage('de')}
        >
          DE
        </span>
      </Menu.Item>
    </Menu>
  );
};

export default SiteHeader;
