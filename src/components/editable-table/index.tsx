import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Spin } from 'antd';
import EditableCell from './parts/cell';
import EditableRow from './parts/row';
import { IContact } from './types';
import { TableWrapper } from './style';
import AddItemModal from '@components/editable-table/parts/add-item-modal';
import composeColumns from './columns-composer';

const url = 'http://localhost:3000/contacts';

const EditableTable = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [dataSource, setDataSource] = useState<IContact[]>(null);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setDataSource(response.data)
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);

  const [count, setCount] = useState<string | number>(4);

  const handleSaveState = (data: IContact) => {
    const newData = {
      id: count,
      ...data
    };

    setDataSource([...dataSource, newData]);
    setCount(count as number + 1);

    axios.post(url, newData).catch((error) => {
      throw new Error(error.message);
    });;
  };

  const handleSaveCell = (row: { id: string }) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];

    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);

    axios
      .put(`${url}/${index}`, row)
      .catch((error) => {
        throw new Error(error.message);
      });;
  };

  const handleDelete = (id: string) => {
    setDataSource(dataSource.filter((item) =>
      item.id !== id
    ));

    axios.delete(`${url}/${id}`).catch((error) => {
      throw new Error(error.message);
    });;
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
