import PlaceCard from '../place-card/place-card';
import { Hotel } from '../../types/hotel';
import classNames from 'classnames';
import { hoverHotel } from '../../store/app-process/action';
import { useDispatch } from 'react-redux';

type PlacesListProps = {
  offers: Hotel[],
  className?: string,
  classNameCard?: string,
  isDispatchHover?: boolean,
}

function PlacesList({offers, className, classNameCard, isDispatchHover = true}: PlacesListProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className={classNames(className, 'places__list')}>
      {
        offers.map((it) => (
          <PlaceCard
            className={classNameCard}
            key={`place-card-${it.id}`}
            data={it}
            onMouseOver={isDispatchHover ? () => dispatch(hoverHotel(it)) : undefined}
            onMouseLeave={isDispatchHover ? () => dispatch(hoverHotel(undefined)) : undefined}
          />
        ))
      }
    </div>
  );
}

export default PlacesList;
