import React from 'react';
import { Button } from 'antd';
import { ColumnsComposerType } from './types';

const composeColumns: ColumnsComposerType = ({
  dataSource,
  handleSave,
  handleDelete,
}) => {
  const columnsProps = [
    {
      title: "ФИО",
      dataIndex: "name",
      width: "30%",
      editable: true
    },
    {
      title: "E-mail",
      dataIndex: "email",
      width: "30%",
      editable: true
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      width: "30%",
      editable: true
    },
    {
      dataIndex: "operation",
      width: '10%',
      render: (text: string, record: { key: string }) =>
        (dataSource.length >= 1) ? (
          <Button
            onClick={() => handleDelete(record.key)}
            style={{ float: "right" }}
          >
            Delete
          </Button>
        ) : null
    }
  ];

  return columnsProps.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: {}) => ({
        record,
        handleSave,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
      })
    };
  });
};

export default composeColumns;
