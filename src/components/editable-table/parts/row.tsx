import Form from 'antd/lib/form';
import React, { FC, useState } from 'react';
import { EditableRowProps } from './types';
import { EditableContext } from './cell';

const EditableRow: FC<EditableRowProps> = ({ index, ...props }) => {
  const [hovered, setHovered] = useState(true);
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      component={false}
    >
      <EditableContext.Provider value={{ form, hovered }}>
        <tr
          {...props}
          onMouseEnter={() => setHovered(false)}
          onMouseLeave={() => setHovered(true)}
          onMouseOver={() => setHovered(false)}
        />
      </EditableContext.Provider>
    </Form>
  );
};

export default EditableRow;
