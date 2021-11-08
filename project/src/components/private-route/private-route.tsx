import { connect, ConnectedProps } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { AuthStatus } from '../../const';
import { State } from '../../types/state';

type PrivateRouteProps = RouteProps & {
  redirect?: string,
}

const mapStateToProps = ({authStatus}: State) => ({
  authStatus,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute({authStatus, redirect, ...props}: ComponentProps): JSX.Element {
  if (authStatus === AuthStatus.Authorized) {
    return <Route {...props} />;
  } else if (redirect) {
    return <Redirect to={redirect} />;
  } else {
    return <h1>Access denied.</h1>;
  }
}

export default connector(PrivateRoute);
