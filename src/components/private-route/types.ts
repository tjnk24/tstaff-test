import { RouteProps } from 'react-router-dom';

export type PrivateRouteProps = RouteProps & {
  component: React.ElementType;
}