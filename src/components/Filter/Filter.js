import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/FilterSlice';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase()));
  };

  return (
    <label>
      Find contacts by name :
      <input
        onChange={onFilterChange}
        value={filterValue}
        type="text"
        name="filter"
      />
    </label>
  );
}

export default Filter;