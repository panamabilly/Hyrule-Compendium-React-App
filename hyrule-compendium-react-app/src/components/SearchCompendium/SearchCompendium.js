import React, { useState } from 'react';

function SearchCompendium() {
	const [searchCompendium, setSearchCompendium] = useState([]);

	function handleChange(event) {
		setSearchCompendium(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
	}
	return (
		<form onSubmit={handleSubmit} className='search-bar'>
			<label htmlFor='search'>
				<span className='search'> Search Compendium</span>
			</label>
			<input
				type='text'
				id='search'
				placeholder='master sword'
				required
				onChange={handleChange}
			/>
			<button type='submit'>Search</button>
		</form>
	);
}

export default SearchCompendium;
