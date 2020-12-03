import React, { FC, useContext } from 'react';
import { Button } from 'antd';
import { EditableContext } from './cell';
import { DeleteButtonWrapper } from '../style';
import { DeleteButtonType } from './types';

const DeleteButton: FC<DeleteButtonType> = ({ handler }) => {
  const { hovered } = useContext(EditableContext);

  return (
    <DeleteButtonWrapper>
      <Button
        onClick={() => handler()}
        hidden={hovered}
      >
        Удалить
      </Button>
    </DeleteButtonWrapper>
  );
};

export default DeleteButton;
