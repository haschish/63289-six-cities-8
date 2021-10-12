import { Hotel } from '../../types/hotel';
import PremiumMark from './premium-mark';
import Rating from './rating';

type PlaceCardProps = {
  data: Hotel,
}

function PlaceCard({data}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card">
      {data.isPremium && <PremiumMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={data.images[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating value={data.rating}/>
        <h2 className="place-card__name">
          <a href="#">{data.title}</a>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
