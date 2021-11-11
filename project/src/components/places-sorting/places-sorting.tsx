import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortMap } from '../../const';
import { changeSort } from '../../store/action';
import { getCurrentSort } from '../../store/app-process/selectors';

function PlacesSorting(): JSX.Element {
  const [focus, setFocus] = useState(false);

  const currentSort = useSelector(getCurrentSort);

  const dispatch = useDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setFocus(!focus)}>
        {sortMap.get(currentSort)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options places__options--custom', {'places__options--opened': focus})}>
        {
          Array.from(sortMap).map(([key, value]) => (
            <li
              key={`places-option-${key}`}
              className={classNames('places__option', {'places__option--active': (currentSort === key)})}
              tabIndex={0}
              onClick={() => {
                dispatch(changeSort(key));
                setFocus(false);
              }}
            >
              {value}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;
