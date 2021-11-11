import { connect, ConnectedProps } from 'react-redux';
import { AuthStatus } from '../../../const';
import { RootState } from '../../../store/reducer';
import { State } from '../../../types/state';
import SignIn from './sign-in';
import SignOut from './sign-out';
import UserItem from './user-item';

const mapStateToProps = ({UserData}: RootState) => ({
  authStatus: UserData.authStatus,
  authInfo: UserData.authInfo,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux;

function NavList({authStatus, authInfo}: ComponentProps): JSX.Element {
  return (
    <ul className="header__nav-list">
      {authStatus === AuthStatus.Authorized && <UserItem authInfo={authInfo!}/>}
      {authStatus === AuthStatus.Authorized ? <SignOut /> : <SignIn />}
    </ul>
  );
}

export default connector(NavList);
