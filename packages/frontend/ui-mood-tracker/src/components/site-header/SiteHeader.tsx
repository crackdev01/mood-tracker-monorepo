import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

import './site-header.scss';

enum LocaleEnum {
  English = 'en',
  Deutsche = 'de',
}

const SiteHeader = (props: any) => {
  const { t, i18n } = useTranslation(['SiteHeader']);
  const location = useLocation();
  const { lat, long } = props;

  const updateLanguage = async (locale: LocaleEnum) => {
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
      <Menu.Item position="right" className="coordinates">
        {lat},{long}
      </Menu.Item>
      <Menu.Item position="right" className="locale">
        <span
          className={i18n.language === LocaleEnum.English ? 'locale--active' : 'locale--inactive'}
          onClick={() => updateLanguage(LocaleEnum.English)}
        >
          EN
        </span>
        <span
          className={i18n.language === LocaleEnum.Deutsche ? 'locale--active' : 'locale--inactive'}
          onClick={() => updateLanguage(LocaleEnum.Deutsche)}
        >
          DE
        </span>
      </Menu.Item>
    </Menu>
  );
};

export default SiteHeader;
