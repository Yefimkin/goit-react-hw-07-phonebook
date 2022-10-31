import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter } from '../../redux/filterSlice';


function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase()));
  };

    const filterId = nanoid();

  return (
    <label htmlFor={filterId}>
      Find contacts by name :
      <input
        
        id={filterId}
        onChange={onFilterChange}
        value={filterValue}
        type="text"
        name="filter"
      />
    </label>
  );
}

export default Filter;