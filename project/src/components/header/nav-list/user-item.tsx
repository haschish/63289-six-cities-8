import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { AuthInfo } from '../../../types/user';

type UserItemProps = {
  authInfo: AuthInfo,
}

function UserItem({authInfo}: UserItemProps): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{authInfo.email}</span>
      </Link>
    </li>
  );
}

export default UserItem;
