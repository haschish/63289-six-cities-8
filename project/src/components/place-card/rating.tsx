const maxValue = 5;

type RatingProps = {
  value: number,
}
function Rating({value}: RatingProps): JSX.Element {
  const percentageValue = Math.min(value, maxValue) / maxValue * 100;

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${percentageValue}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
