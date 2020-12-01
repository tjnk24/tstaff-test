import React, { FC, useState } from 'react';
import { Button, Card, Typography, Input } from 'antd';
import authenticateUser from './helpers';
import { layout , tailLayout } from './layout-props';
import Form from './style';
import { AuthValuesType } from './types';

const AuthForm: FC = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loginHandler = (values: AuthValuesType) => {
    setButtonDisabled(true);
    authenticateUser(values, setErrorMessage);
    setButtonDisabled(false);
  };

  return (
    <Card>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFocus={() => setErrorMessage(null)}
        onFinish={loginHandler}
      >
        <Form.Item
          label="Логин"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} hidden={!errorMessage}>
          <Typography.Text type="danger">{errorMessage}</Typography.Text>
        </Form.Item>

        <Form.Item
          {...tailLayout}
          style={{ marginBottom: 0 }}
        >
          <Button
            type="primary"
            htmlType="submit"
            disabled={buttonDisabled}
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AuthForm;