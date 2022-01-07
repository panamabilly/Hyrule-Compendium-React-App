import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './App.css';
import BotwCompendium from './components/DataTable/BotwCompendium';
import DataTable from './components/DataTable/BotwCompendium';
import SearchCompendium from './components/SearchCompendium/SearchCompendium';
import DetailsTest from './components/DetailsTest/DetailsTest';

function App() {
	const [searchCompendium, setSearchCompendium] = useState('');

	function handleChange(event) {
		setSearchCompendium(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		BotwCompendium();
	}

	return (
		<div>
			<header>
				<h1 className='App__header'>Breath of the Wild: Hyrule Compendium</h1>
			</header>
			<main>
				<nav className='App__navigation'>
					<input
						className='App__navigation-button'
						type='button'
						value='Compendium'
					/>
					<input
						className='App__navigation-button'
						type='button'
						value='Search'
					/>
					<input
						className='App__navigation-button'
						type='button'
						value='About'
					/>
				</nav>
				<img
					className='App__background'
					src='https://www.zeldadungeon.net/wiki/images/d/d6/Link_looking_over_BOTW_Hyrule.jpg'
					alt='Breath of the Wild Background Image'
				/>
				<SearchCompendium />
				<BotwCompendium />
				<DetailsTest />
			</main>
		</div>
	);
}

export default App;
