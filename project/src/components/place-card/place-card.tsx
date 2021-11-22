import { Link } from 'react-router-dom';
import { generatePath } from 'react-router';
import { AppRoute } from '../../const';
import { Hotel } from '../../types/hotel';
import PremiumMark from './premium-mark';
import Rating from './rating';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../store/api-action';

type PlaceCardProps = {
  data: Hotel,
  onMouseOver?: () => void,
  onMouseLeave?: () => void,
  className?: string,
}

function PlaceCard({data, onMouseOver, onMouseLeave, className}: PlaceCardProps): JSX.Element {
  const dispatch = useDispatch();

  const handlerBookmarkButtonClick = () => {
    dispatch(toggleFavorite(data.id, !data.isFavorite));
  };

  const link = generatePath(AppRoute.Room, data);

  return (
    <article className={classNames(className, 'place-card')} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {data.isPremium && <PremiumMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={link}>
          <img className="place-card__image" src={data.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classNames('place-card__bookmark-button button', {'place-card__bookmark-button--active': data.isFavorite})} type="button" onClick={handlerBookmarkButtonClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating value={data.rating}/>
        <h2 className="place-card__name">
          <Link to={link}>{data.title}</Link>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
