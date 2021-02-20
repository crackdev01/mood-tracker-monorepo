import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import '../App.scss';

function SiteHeader() {
  const { t } = useTranslation(['SiteHeader']);

  return (
    <Menu pointing secondary>
      <Menu.Item header>{t('header')}</Menu.Item>
    </Menu>
  );
}

export default SiteHeader;
