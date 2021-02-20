import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import '../App.scss';

function SiteHeader() {
  const { t } = useTranslation(['SiteHeader']);

  return (
    <Menu pointing secondary>
      <Menu.Item header>
        <Link to="login">{t('header')}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/mood-entry">{t('moodEntry')}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/statistics">{t('statistics')}</Link>
      </Menu.Item>
    </Menu>
  );
}

export default SiteHeader;
