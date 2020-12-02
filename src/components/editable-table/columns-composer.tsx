import React from 'react';
import DeleteButton from './parts/delete-button';
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
      render: (_text: string, record: { id: string }) =>
        (dataSource.length >= 1) ? (
          <DeleteButton
            handler={() => handleDelete(record.id)}
          />
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
