import React, { useState } from 'react';
import { Table, Button } from 'antd';
import EditableCell from './parts/cell';
import EditableRow from './parts/row';
import { ColumnType, IContact } from './types';
import TableWrapper from './style';
import AddItemModal from '@components/editable-table/parts/add-item-modal';

const EditableTable = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const [dataSource, setDataSource] = useState<IContact[]>([
    {
      key: "0",
      name: "Виталий Геннадьевич Иванов",
      email: "sifegim192@ofdow.com",
      phone: "+79252223355"
    },
    {
      key: "1",
      name: "Эдуард Викторович Григорьев",
      email: "sdfsdfsdf@ddfw.com",
      phone: "+79256664455"
    },
    {
      key: "2",
      name: "Хабиб Хабибович Нурмагомедов",
      email: "sdfsdfsss@sdfsdf.org",
      phone: "+79259994411"
    },
    {
      key: "3",
      name: "Евгений Евгеньевич Плющенко",
      email: "sdfsdfddd@dddddd.org",
      phone: "+79252220033"
    }
  ]);

  const [count, setCount] = useState<string | number>(4);

  const columnsData: ColumnType[] = [
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
        dataSource.length >= 1 ? (
          <Button
            onClick={() => handleDelete(record.key)}
            style={{ float: "right" }}
          >
            Delete
          </Button>
        ) : null
    }
  ];

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const saveState = (data: IContact) => {
    const newData = {
      key: count,
      ...data
    };
    setDataSource([...dataSource, newData]);
    setCount(count as number + 1);
  };

  const handleSave = (row: { key: string }) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };

  const columns = columnsData.map((col) => {
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

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  };

  return (
    <>
      <AddItemModal
        inputsData={columns}
        visible={addModalVisible}
        saveState={saveState}
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
          rowClassName={() => "editable-row"}
          pagination={false}
          dataSource={dataSource}
          columns={columns}
        />
      </TableWrapper>
    </>
  );
};

export default EditableTable;
