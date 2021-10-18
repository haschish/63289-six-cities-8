import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Hotel } from '../../types/hotel';
import PremiumMark from './premium-mark';
import Rating from './rating';

type PlaceCardProps = {
  data: Hotel,
  onMouseOver?: () => void,
  onMouseLeave?: () => void,
}

function PlaceCard({data, onMouseOver, onMouseLeave}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {data.isPremium && <PremiumMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room}>
          <img className="place-card__image" src={data.previewImage} width="260" height="200" alt="Place image" />
        </Link>
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
          <Link to={AppRoute.Room}>{data.title}</Link>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
