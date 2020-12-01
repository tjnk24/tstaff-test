import Form from 'antd/lib/form';
import React, { FC } from 'react';
import { EditableRowProps } from '../types';
import { EditableContext } from './cell';

const EditableRow: FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

export default EditableRow;
