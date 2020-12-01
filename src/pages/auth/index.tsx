import React, { FC } from 'react';
import Title from 'antd/lib/typography/Title';
import AuthForm from '@components/auth-form';
import Wrapper from './style';

const AuthPage: FC = () => {
  return (
    <Wrapper>
      <Title>Takeoff-staff test</Title>
      <AuthForm />
    </Wrapper>
  );
};

export default AuthPage;