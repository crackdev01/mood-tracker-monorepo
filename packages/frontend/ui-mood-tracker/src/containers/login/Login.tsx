import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Header, Input, Form } from 'semantic-ui-react';

import './login.scss';

function Login() {
  const { t } = useTranslation(['Login']);
  const loading = false;

  return (
    <Form className="login">
      <Header as="h2" className="login__form-header">
        {t('header')}
      </Header>

      <Form.Field>
        <label>{t('username')}</label>
        <input placeholder={t('username')} />
      </Form.Field>

      <Form.Field>
        <label>{t('password')}</label>
        <input placeholder={t('password')} />
      </Form.Field>

      <Button loading={loading}>{t('submit')}</Button>
    </Form>
  );
}

export default Login;
