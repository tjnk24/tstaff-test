import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Spin } from 'antd';
import EditableCell from './parts/cell';
import EditableRow from './parts/row';
import AddItemModal from './parts/add-item-modal';
import composeColumns from './columns-composer';
import { getLocalContacts, setLocalContacts, url } from './helpers';
import { IContact } from './types';

import { TableWrapper } from './style';

const EditableTable: FC = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState<IContact[]>(getLocalContacts);
  const [count, setCount] = useState<string | number>(4);

  useEffect(() => {
    if (!getLocalContacts) {
      axios.get(url)
        .then((response) => {
          setDataSource(response.data);
          setLocalContacts(response.data)
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    }
  }, []);

  const handleSaveState = (data: IContact) => {
    const newData = {
      id: count,
      ...data
    };

    const newDataSource = [...dataSource, newData]

    setDataSource(newDataSource);
    setCount(count as number + 1);
    setLocalContacts(newDataSource)
  };

  const handleSaveCell = (row: { id: string }) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];

    newData.splice(index, 1, { ...item, ...row });

    setDataSource(newData);
    setLocalContacts(newData);
  };

  const handleDelete = (id: string) => {
    const newData = dataSource.filter((item) =>
        item.id !== id
      ).map((item, index) => ({
        ...item,
        id: index.toString(),
      }));

    setDataSource(newData);
    setLocalContacts(newData);
  };

  const composerParams = {
    dataSource,
    handleSave: handleSaveCell,
    handleDelete
  };

  const columns = composeColumns(composerParams);

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  };

  return (
    <>
      {
        dataSource ? (
          <>
            <AddItemModal
              inputsData={columns}
              visible={addModalVisible}
              saveState={handleSaveState}
              onVisibleHandler={setAddModalVisible}
            />

            <TableWrapper>
              <Button
                onClick={() => setAddModalVisible(true)}
                type="primary"
              >
                Добавить контакт
              </Button>
              <Table<IContact>
                components={components}
                rowKey="id"
                rowClassName={() => "editable-row"}
                pagination={false}
                dataSource={dataSource}
                columns={columns}
              />
            </TableWrapper>
          </>
        ) : <Spin />
      }
    </>
  );
};

export default EditableTable;
