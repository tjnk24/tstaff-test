import { Dispatch, SetStateAction } from 'react'
import { FormInstance } from 'antd/lib/form';
import { ColumnType, IContact } from '../types';

export type AddItemModalProps = {
  inputsData: ColumnType[];
  visible: boolean;
  saveState: Dispatch<SetStateAction<IContact>>;
  onVisibleHandler: Dispatch<SetStateAction<boolean>>;
}

export type EditableCellProps = ColumnType & {
  record: {
    id: string;
    [id: string]: string;
  };
  handleSave: ({}) => void;
}

export type EditableContextType = {
  form: FormInstance;
  hovered: boolean;
}

export type EditableRowProps = {
  index: string | number;
}

export type DeleteButtonType = {
  handler: () => void;
}