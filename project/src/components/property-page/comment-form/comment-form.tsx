import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResourceStatus } from '../../../const';
import { addReviewAction } from '../../../store/api-action';
import { getReviewStatus } from '../../../store/app-data/selectors';
import RatingInput from './rating-input';

type CommentFormType = {
  hotelId: number,
};

function CommentForm({hotelId}: CommentFormType): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const reviewStatus = useSelector(getReviewStatus);
  const dispatch = useDispatch();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addReviewAction(hotelId, review, rating));
  };

  useEffect(() => {
    if (reviewStatus === ResourceStatus.Loaded) {
      setRating(0);
      setReview('');
    }
  }, [reviewStatus]);

  const isValidRating = rating > 0;
  const isValidReview = review.length >= 50 && review.length <= 300;

  const disabledSubmit = !isValidRating || !isValidReview || reviewStatus === ResourceStatus.Loading;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((it) => <RatingInput key={`rating-input-${it}`} value={it} onChange={() => setRating(it)} checked={it === rating}/>)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabledSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
