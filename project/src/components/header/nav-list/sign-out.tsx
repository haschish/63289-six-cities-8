import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../store/api-action';

function SignOut(): JSX.Element {
  const dispatch = useDispatch();

  const handleLinkClick = (evt: SyntheticEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <li className="header__nav-item">
      <a className="header__nav-link" href="#" onClick={handleLinkClick}>
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default SignOut;
