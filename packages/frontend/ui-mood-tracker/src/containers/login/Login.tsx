import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Header, Input, Form } from 'semantic-ui-react';

import './login.scss';

function Login() {
  const { t } = useTranslation(['Login']);
  const loading = false;

  return (
    <article className="login">
      <Form className="login__form">
        <Header as="h2" className="login__form__header">
          {t('header')}
        </Header>

        <Form.Field className="login__form__input">
          <label>{t('username')}</label>
          <input placeholder={t('username')} />
        </Form.Field>

        <Form.Field className="login__form__input">
          <label>{t('password')}</label>
          <input placeholder={t('password')} />
        </Form.Field>

        <Button className="login__form__input" loading={loading}>
          {t('submit')}
        </Button>
      </Form>
    </article>
  );
}

export default Login;
