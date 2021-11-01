import classNames from 'classnames';

type LocationsItemProps = {
  name: string,
  isActive?: boolean,
  onClick?: () => void,
}


function LocationsItem({name, isActive, onClick}: LocationsItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={classNames('locations__item-link tabs__item', {'tabs__item--active': isActive})}
        onClick={onClick}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
