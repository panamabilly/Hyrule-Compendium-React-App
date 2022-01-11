import React, { useState } from 'react';
import './SearchCompendium.css';

function SearchCompendium() {
	// searchbar state
	const [searchCompendium, setSearchCompendium] = useState('');

	// API state
	const [searchApi, setSearchApi] = useState([]);

	function handleChange(event) {
		setSearchCompendium(event.target.value);
	}

	const entryurl = 'https://botw-compendium.herokuapp.com/api/v2/entry/';

	function handleSubmit(event) {
		event.preventDefault();
		const url = `${entryurl}${searchCompendium}`;

		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				console.log(json.data);
				setSearchApi(json.data);
			})
			.catch((err) => console.log(err));
	}
	return (
		<main>
			<form onSubmit={handleSubmit} className='search-bar'>
				<label htmlFor='search'>
					<span className='search'> Search Compendium </span>
				</label>
				<input
					type='text'
					name='searchBar'
					id='searchBar'
					placeholder='master sword'
					required
					onChange={handleChange}
				/>
				<button type='submit'>Search</button>
			</form>
			<h3>Search Results</h3>
			<table id='details'>
				<thead>
					<tr>
						<td>Name</td>
						<td>{searchApi.name}</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>ID:</td>
						<td>{searchApi.id}</td>
					</tr>
					<tr>
						<td>Category:</td>
						<td>{searchApi.category}</td>
					</tr>
					<tr>
						<td>Location:</td>
						<td>{searchApi.common_locations}</td>
					</tr>
					<tr>
						<td>Drops:</td>
						<td>{searchApi.drops}</td>
					</tr>

					<tr>
						<td>Attack:</td>
						<td>{searchApi.attack}</td>
					</tr>
					<tr>
						<td>Defense:</td>
						<td>{searchApi.defense}</td>
					</tr>
					<tr>
						<td>Hearts Recovered:</td>
						<td>{searchApi.hearts_recovered}</td>
					</tr>
					<tr>
						<td>Cooking Effect:</td>
						<td>{searchApi.cooking_effect}</td>
					</tr>

					<tr>
						<td>Description: </td>
						<td>{searchApi.description}</td>
					</tr>
					<tr>
						<td>Image: </td>
						<td>
							<img src={searchApi.image} alt={searchApi.name} />
						</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
}

export default SearchCompendium;
