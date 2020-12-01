import axios from 'axios';
import { AuthenticateUserType } from './types';

const url = 'http://localhost:3000/login';

const message400 = 'Извините, неправильный логин или пароль.';
const message404 = 'Сервер авторизации недоступен.';

const authenticateUser: AuthenticateUserType = (values, setError) => {
  axios.post(url, values)
    .then((response) => {
      const { accessToken } = response.data;

      localStorage.setItem('token', accessToken);
    }).catch((error) => {
      switch (error.response.status) {
        case 400: {
          setError(message400);
          return;
        }
        case 404: {
          setError(message404);
          return;
        }
        default: {
          break;
        }
      }
      throw new Error(error.message);
    });
};

export default authenticateUser;
