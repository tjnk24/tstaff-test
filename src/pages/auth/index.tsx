import React, { FC, useEffect } from 'react';
import Title from 'antd/lib/typography/Title';
import AuthForm from '@components/auth-form';
import { Wrapper, CredentialsBlock } from './style';
import { RouteComponentProps } from 'react-router-dom';

const AuthPage: FC<RouteComponentProps> = ({ history, location }) => {
  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      history.push('/');
    };
  }, []);

  return (
    <Wrapper>
      <Title>Takeoff-staff test</Title>
      <AuthForm
        history={history}
        location={location}
      />
      <CredentialsBlock>
        <span>Тестовые логин-пароль для входа:</span>
        <span>Логин: <b>olivier@mail.com</b></span>
        <span>Пароль: <b>test123</b></span>
      </CredentialsBlock>
    </Wrapper>
  );
};

export default AuthPage;