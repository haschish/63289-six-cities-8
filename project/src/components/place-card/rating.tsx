type RatingProps = {
  value: number,
}
function Rating({value}: RatingProps): JSX.Element {
  const width = value / 5 * 100;

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${width}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
