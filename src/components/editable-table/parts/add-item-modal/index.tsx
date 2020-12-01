import React, { FC } from 'react';
import Modal from 'antd/lib/modal/Modal';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import { AddItemModalProps, IContact } from '@components/editable-table/types';
import { layout, tailLayout } from './layout-props';

const AddItemModal: FC<AddItemModalProps> = ({
  inputsData,
  visible,
  saveState,
  onVisibleHandler,
}) => {
  const addHandler = (values: IContact) => {
    onVisibleHandler(false);
    saveState(values);
  };

  const mappedInputs = inputsData.map((element) => {
    if (element.dataIndex !== 'operation') {
      const { dataIndex, title } = element;

      return (
        <Form.Item
          key={dataIndex}
          label={title}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `Пожалуйста, впишите ${title.toLowerCase()}.`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      )
    } else {
      return true;
    }
  })

  return (
    <Modal
      title="Добавить контакт"
      visible={visible}
      centered
      onCancel={() => onVisibleHandler(false)}
      footer={false}
    >
      <Form
        {...layout}
        labelAlign="left"
        name="basic"
        onFinish={addHandler}
        initialValues={{
          remember: true,
        }}
      >
        { mappedInputs }

        <Form.Item
          {...tailLayout}
          style={{ marginBottom: 0 }}
        >
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddItemModal;