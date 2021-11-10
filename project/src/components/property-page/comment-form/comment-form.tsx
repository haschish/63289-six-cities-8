import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ResourceStatus } from '../../../const';
import { addReviewAction } from '../../../store/api-action';
import { ThunkAppDispatch } from '../../../types/action';
import { State } from '../../../types/state';
import RatingInput from './rating-input';

type CommentFormType = {
  hotelId: number,
};

const mapStateToProps = ({reviewStatus}: State) => ({
  reviewStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  sendReview(hotelId: number, comment: string, rating: number) {
    dispatch(addReviewAction(hotelId, comment, rating));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux & CommentFormType;

function CommentForm({sendReview, hotelId, reviewStatus}: ComponentProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    sendReview(hotelId, review, rating);
  };

  useEffect(() => {
    if (reviewStatus === ResourceStatus.Loaded) {
      setRating(0);
      setReview('');
    }
  }, [reviewStatus]);

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
        <button className="reviews__submit form__submit button" type="submit" disabled={reviewStatus === ResourceStatus.Loading}>Submit</button>
      </div>
    </form>
  );
}

export default connector(CommentForm);
