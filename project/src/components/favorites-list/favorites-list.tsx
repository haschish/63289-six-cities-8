import { Hotel } from '../../types/hotel';
import FavoriteItem from './favorite-item';

type FavoritesListProps = {
  offers: Hotel[],
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const map = new Map<string, Hotel[]>();

  offers.forEach((it) => {
    if (!map.has(it.city.name)) {
      map.set(it.city.name, []);
    }
    map.get(it.city.name)?.push(it);
  });

  return (
    <>
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
      </section>
      <ul className="favorites__list">
        {Array.from(map.keys()).map(it => <FavoriteItem key={`favorite-item-${it}`} title={it} offers={map.get(it) || []} />)}
      </ul>
    </>
  );
}

export default FavoritesList;
