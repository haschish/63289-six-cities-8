import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResourceStatus } from '../../const';
import { loadFavoriteOffersAction } from '../../store/api-action';
import { getFavoriteOffers, getFavoriteOffersStatus } from '../../store/app-data/selectors';
import FavoritesEmpty from './favorites-empty';
import FavoritesList from './favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import FavoritesLoading from './favorites-loading';

function FavoritesPage(): JSX.Element {
  const offers = useSelector(getFavoriteOffers);
  const offersStatus = useSelector(getFavoriteOffersStatus);
  const dispatch = useDispatch();
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (isFirst) {
      dispatch(loadFavoriteOffersAction());
      setIsFirst(false);
    }
  });

  const isEmpty = offers.length === 0;

  return (
    <div className={classNames('page', {'page--favorites-empty': isEmpty})}>
      <Header />

      <main className={classNames('page__main page__main--favorites', {'page__main--favorites-empty': isEmpty})}>
        <div className="page__favorites-container container">
          {offersStatus === ResourceStatus.Loading && <FavoritesLoading />}
          {offersStatus === ResourceStatus.Loaded && offers.length === 0 && <FavoritesEmpty />}
          {offersStatus === ResourceStatus.Loaded && offers.length !== 0 && <FavoritesList offers={offers}/>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
