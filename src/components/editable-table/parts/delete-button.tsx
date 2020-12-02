import React, { FC, useContext } from 'react';
import { Button } from 'antd';
import { EditableContext } from './cell';
import { ButtonWrapper } from '../style';
import { DeleteButtonType } from './types';

const DeleteButton: FC<DeleteButtonType> = ({ handler }) => {
  const { hovered } = useContext(EditableContext);

  return (
    <ButtonWrapper>
      <Button
        onClick={() => handler()}
        hidden={hovered}
      >
        Удалить
      </Button>
    </ButtonWrapper>
  );
};

export default DeleteButton;
