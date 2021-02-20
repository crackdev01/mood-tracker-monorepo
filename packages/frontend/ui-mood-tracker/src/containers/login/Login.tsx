import React from 'react';
import { Button, Header, Input } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import './login.scss';

function Login() {
  const { t } = useTranslation(['Login']);
  const loading = false;

  return (
    <article className="login">
      <Header as="h2" className="login__form-header">
        {t('header')}
      </Header>

      <Input className="login__form-input" placeholder={t('username')} />

      <Input className="login__form-input" placeholder={t('password')} />

      <Button loading={loading}>{t('submit')}</Button>
    </article>
  );
}

export default Login;
