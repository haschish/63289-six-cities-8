import PlaceCard from '../place-card/place-card';
import { Hotel } from '../../types/hotel';
import { useState } from 'react';
import classNames from 'classnames';

type PlacesListProps = {
  offers: Hotel[],
  className?: string,
  classNameCard?: string,
}

function PlacesList({offers, className, classNameCard}: PlacesListProps): JSX.Element {
  const [, setSelected] = useState<Hotel>();

  return (
    <div className={classNames(className, 'places__list')}>
      {
        offers.map((it) => (
          <PlaceCard
            className={classNameCard}
            key={`place-card-${it.id}`}
            data={it}
            onMouseOver={() => setSelected(it)}
            onMouseLeave={() => setSelected(undefined)}
          />
        ))
      }
    </div>
  );
}

export default PlacesList;
