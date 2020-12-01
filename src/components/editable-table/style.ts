import styled from 'styled-components';

const TableWrapper = styled.div`
  .ant-table-thead tr th {
    padding-left: 30px;
  }

  .editable-cell {
    position: relative;
  }

  .editable-cell-value-wrap {
    padding: 5px 12px;
    cursor: pointer;
  }

  .editable-row:hover .editable-cell-value-wrap {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 4px 11px;
  }

  [data-theme='dark'] .editable-row:hover .editable-cell-value-wrap {
    border: 1px solid #434343;
  }
`;

export default TableWrapper;
