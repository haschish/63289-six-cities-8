import PlaceCard from '../place-card/place-card';
import { Hotel } from '../../types/hotel';
import classNames from 'classnames';
import { hoverHotel } from '../../store/app-process/action';
import { useDispatch } from 'react-redux';

type PlacesListProps = {
  offers: Hotel[],
  className?: string,
  classNameCard?: string,
}

function PlacesList({offers, className, classNameCard}: PlacesListProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className={classNames(className, 'places__list')}>
      {
        offers.map((it) => (
          <PlaceCard
            className={classNameCard}
            key={`place-card-${it.id}`}
            data={it}
            onMouseOver={() => dispatch(hoverHotel(it))}
            onMouseLeave={() => dispatch(hoverHotel(undefined))}
          />
        ))
      }
    </div>
  );
}

export default PlacesList;
