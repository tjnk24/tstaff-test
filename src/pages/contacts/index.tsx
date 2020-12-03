import React, { FC } from 'react';
import Title from 'antd/lib/typography/Title';
import EditableTable from '@components/editable-table';
import Wrapper from './style';

const ContactsPage: FC = () => {
  return (
    <Wrapper>
      <Title level={2}>Контакты</Title>
      <EditableTable />
    </Wrapper>
  );
};

export default ContactsPage;
