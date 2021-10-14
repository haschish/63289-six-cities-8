import { Hotel } from "../../types/hotel";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import FavoritesList from "../favorites-list/favorites-list";

type FavoritesPageProps = {
  offers: Hotel[],
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const filtered = offers.filter(it => it.isFavorite);
  const mainClass = filtered.length === 0 ? 'page__main--favorites-empty' : '';
  const pageClass = filtered.length === 0 ? 'page--favorites-empty' : '';

  return (
    <div className={`page ${pageClass}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--favorites ${mainClass}`}>
        <div className="page__favorites-container container">
          {
            (filtered.length === 0) ?
              <FavoritesEmpty /> :
              <FavoritesList offers={filtered}/>
          }

        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
