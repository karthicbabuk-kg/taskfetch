import React from 'react';
import { FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <FormControl
      type="text"
      placeholder="Search products..."
      className="my-3"
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
};

export default SearchBar;
