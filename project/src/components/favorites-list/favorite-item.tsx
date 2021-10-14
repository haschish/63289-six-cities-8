import { Hotel } from "../../types/hotel";
import FavoriteCard from "./favorite-card";

type FavoriteItemProps = {
  title: string,
  offers: Hotel[],
}

function FavoriteItem({title, offers}: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{title}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((it) => <FavoriteCard key={`favorite-card-${it.id}`} offer={it} />)}
      </div>
    </li>
  );
}

export default FavoriteItem;
