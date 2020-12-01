import Form from 'antd/lib/form/Form';
import { Dispatch, SetStateAction } from 'react';

export type AuthValuesType = {
  email: string;
  password: string;
}

export type AuthenticateUserType = (
  values: AuthValuesType,
  setError: Dispatch<SetStateAction<string>>
) => void;