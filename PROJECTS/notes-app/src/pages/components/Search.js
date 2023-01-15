import React from 'react';
import { MdSearch } from 'react-icons/md';
import './Search.css'

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<MdSearch className='icon' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type to search...'
			/>
		</div>
	);
};

export default Search;