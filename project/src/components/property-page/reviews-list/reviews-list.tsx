import { Review } from "../../../types/review";
import ReviewsItem from "./reviews-item";

type ReviewsListProps = {
  reviews: Review[]
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((it) => <ReviewsItem key={`reviews-item-${it.id}`} review={it}/>)}
    </ul>
  );
}

export default ReviewsList;
