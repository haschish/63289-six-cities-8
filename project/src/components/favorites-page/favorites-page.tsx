import { Hotel } from '../../types/hotel';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';

type FavoritesPageProps = {
  offers: Hotel[],
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const filtered = offers.filter((it) => it.isFavorite);
  const mainClass = filtered.length === 0 ? 'page__main--favorites-empty' : '';
  const pageClass = filtered.length === 0 ? 'page--favorites-empty' : '';

  return (
    <div className={`page ${pageClass}`}>
      <Header />

      <main className={`page__main page__main--favorites ${mainClass}`}>
        <div className="page__favorites-container container">
          {
            (filtered.length === 0) ?
              <FavoritesEmpty /> :
              <FavoritesList offers={filtered}/>
          }

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
