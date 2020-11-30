import React, { FC } from 'react';
import Title from 'antd/lib/typography/Title';
import AuthForm from '@components/auth-form';
import Wrapper from './style';

const Auth: FC = () => {
  return (
    <Wrapper>
      <Title>Takeoff-staff test</Title>
      <AuthForm />
    </Wrapper>
  );
};

export default Auth;