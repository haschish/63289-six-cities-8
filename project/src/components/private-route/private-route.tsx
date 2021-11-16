import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { AuthStatus } from '../../const';
import { getAuthStatus } from '../../store/user-data/selectors';

type PrivateRouteProps = RouteProps & {
  redirect?: string,
}

function PrivateRoute({redirect, ...props}: PrivateRouteProps): JSX.Element {
  const authStatus = useSelector(getAuthStatus);
  if (authStatus === AuthStatus.Authorized) {
    return <Route {...props} />;
  } else if (redirect) {
    return <Redirect to={redirect} />;
  } else {
    return <h1>Access denied.</h1>;
  }
}

export default PrivateRoute;
