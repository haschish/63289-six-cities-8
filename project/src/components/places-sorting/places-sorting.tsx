import classNames from 'classnames';
import { Dispatch, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { sortMap } from '../../const';
import { changeSort } from '../../store/action';
import { Actions } from '../../types/action';
import { Sort } from '../../types/sort';
import { State } from '../../types/state';

const mapStateToProps = ({currentSort}: State) => ({
  currentSort,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onClickOption(value: Sort) {
    dispatch(changeSort(value));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux;

function PlacesSorting({onClickOption, currentSort}: ComponentProps): JSX.Element {
  const [focus, setFocus] = useState(false);

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
                onClickOption(key);
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

export default connector(PlacesSorting);
