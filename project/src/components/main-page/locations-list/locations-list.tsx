import { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { changeCity } from '../../../store/action';
import { Actions } from '../../../types/action';
import { State } from '../../../types/state';
import LocationsItem from './locations-item';

type LocationsListProps = {
  locations: string[],
}

const mapStateToProps = ({currentCity}: State) => ({
  currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onClickItem(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux & LocationsListProps;

function LocationsList({locations, currentCity, onClickItem}: ComponentProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {locations.map((it) => <LocationsItem key={`locations-item-${it}`} name={it} isActive={it === currentCity} onClick={() => onClickItem(it)}/>)}
    </ul>
  );
}

export default connector(LocationsList);
