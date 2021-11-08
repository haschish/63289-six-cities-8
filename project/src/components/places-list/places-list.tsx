import PlaceCard from '../place-card/place-card';
import { Hotel } from '../../types/hotel';
import { Dispatch } from 'react';
import classNames from 'classnames';
import { Actions } from '../../types/action';
import { hoverHotel } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';

type PlacesListProps = {
  offers: Hotel[],
  className?: string,
  classNameCard?: string,
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSelectCard(value?: Hotel) {
    dispatch(hoverHotel(value));
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux & PlacesListProps;

function PlacesList({offers, className, classNameCard, onSelectCard}: ComponentProps): JSX.Element {
  return (
    <div className={classNames(className, 'places__list')}>
      {
        offers.map((it) => (
          <PlaceCard
            className={classNameCard}
            key={`place-card-${it.id}`}
            data={it}
            onMouseOver={() => onSelectCard(it)}
            onMouseLeave={() => onSelectCard(undefined)}
          />
        ))
      }
    </div>
  );
}

export default connector(PlacesList);
