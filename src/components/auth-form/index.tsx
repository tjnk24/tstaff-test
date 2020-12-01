import React, { FC } from 'react';
import { Button, Card } from 'antd';
import Input from 'antd/lib/input';
import Form from './style';
import { layout , tailLayout } from './layout-props';

const AuthForm: FC = () => {
  return (
    <Card>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Логин"
          name="username"
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

        <Form.Item
          {...tailLayout}
          style={{ marginBottom: 0 }}
        >
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AuthForm;