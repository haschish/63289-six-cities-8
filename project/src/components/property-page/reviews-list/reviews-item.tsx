import { Review } from '../../../types/review';
import { convertToPercentage } from '../../../util';
import dayjs from 'dayjs';

type ReviewsItemProps = {
  review: Review,
}

function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
  const date = dayjs(review.date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${convertToPercentage(review.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={date.format('YYYY-MM-DD')}>{date.format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
