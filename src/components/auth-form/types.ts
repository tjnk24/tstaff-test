import Form from 'antd/lib/form/Form';
import { Dispatch, SetStateAction } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type AuthFormProps = {
  history: RouteComponentProps['history'];
  location: RouteComponentProps['location'];
}

export type LocationStateType = { from: { pathname: string } }

export type AuthValuesType = {
  email: string;
  password: string;
}

export type AuthenticateUserType = (
  values: AuthValuesType,
  setError: Dispatch<SetStateAction<string>>
) => Promise<void>;
