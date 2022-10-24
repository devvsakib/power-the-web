import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({ value, handleChange }) => {
  return (
    <div className='container'>
      <div className='search'>
        <MdSearch className='icon' />
        <input
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='Search for a note'
        />
      </div>
    </div>
  );
};

export default SearchBar;
