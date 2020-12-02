export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export type ColumnType = {
  title?: string;
  dataIndex: string;
  width?: string | number;
  editable?: boolean;
  render?: (
    _text: string,
    record: { id: string }
  ) => JSX.Element | null
}

type ColumnsComposerParams = {
  dataSource: IContact[],
  handleSave: (row: { id: IContact['id'] }) => void,
  handleDelete: (id: string) => void
}

export type ColumnsComposerType = (params: ColumnsComposerParams) => ColumnType[];
