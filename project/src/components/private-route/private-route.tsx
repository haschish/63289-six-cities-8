import { Redirect, Route, RouteProps } from 'react-router';
import { AuthStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  authStatus: AuthStatus,
  redirect?: string,
}

function PrivateRoute({authStatus, redirect, ...props}: PrivateRouteProps): JSX.Element {
  if (authStatus === AuthStatus.Authorized) {
    return <Route {...props} />;
  } else if (redirect) {
    return <Redirect to={redirect} />;
  } else {
    return <h1>Access denied.</h1>;
  }
}

export default PrivateRoute;
