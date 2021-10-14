import PlaceCard from '../place-card/place-card';
import { Hotel } from "../../types/hotel";
import { useState } from 'react';

type PlacesListProps = {
  offers: Hotel[],
}

function PlacesList({offers}: PlacesListProps): JSX.Element {
  const [selected, setSelected] = useState<Hotel>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((it) =>
          <PlaceCard
            key={`place-card-${it.id}`}
            data={it}
            onMouseOver={() => setSelected(it)}
            onMouseLeave={() => setSelected(undefined)}
          />
        )
      }
    </div>
  );
}

export default PlacesList;
