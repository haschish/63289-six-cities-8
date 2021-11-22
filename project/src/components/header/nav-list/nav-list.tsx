import { useSelector } from 'react-redux';
import { AuthStatus } from '../../../const';
import { getAuthInfo, getAuthStatus } from '../../../store/user-data/selectors';
import SignIn from './sign-in';
import SignOut from './sign-out';
import UserItem from './user-item';

function NavList(): JSX.Element {
  const authStatus = useSelector(getAuthStatus);
  const authInfo = useSelector(getAuthInfo);
  const authorized = authStatus === AuthStatus.Authorized;

  return (
    <ul className="header__nav-list">
      {authorized && <UserItem authInfo={authInfo!}/>}
      {authorized ? <SignOut /> : <SignIn />}
    </ul>
  );
}

export default NavList;
