import { SyntheticEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { logoutAction } from '../../../store/api-action';
import { ThunkAppDispatch } from '../../../types/action';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  logout() {
    dispatch(logoutAction());
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux;

function SignOut({logout}: ComponentProps): JSX.Element {
  const handleClick = (evt: SyntheticEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    logout();
  };

  return (
    <li className="header__nav-item">
      <a className="header__nav-link" href="#" onClick={handleClick}>
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default connector(SignOut);
