import { Dispatch, SetStateAction } from 'react'

export interface IContact {
  key: string;
  name: string;
  email: string;
  phone: string;
}

export type ColumnType = {
  title?: string;
  dataIndex: string;
  width?: string;
  editable?: true;
  render?: (
    text: string,
    record: { key: string }
    ) => JSX.Element | null
}

export type EditableRowProps = {
  index: string | number;
}

export type EditableCellProps = ColumnType & {
  record: {
    key: string;
    [key: string]: string;
  };
  handleSave: ({}) => void;
}

export type AddItemModalProps = {
  inputsData: ColumnType[];
  visible: boolean;
  saveState: Dispatch<SetStateAction<IContact>>;
  onVisibleHandler: Dispatch<SetStateAction<boolean>>;
}
