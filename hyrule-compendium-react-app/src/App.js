import './App.css';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DataTable from './components/BotwCompendium/BotwCompendium';
import BotwCompendium from './components/BotwCompendium/BotwCompendium';
import AboutCompendium from './components/AboutCompendium/AboutCompendium';
import SearchCompendium from './components/SearchCompendium/SearchCompendium';
import Details from './components/Details/Details';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
	return (
		<div id='App'>
			<header>
				<h1 className='App__header'>Breath of the Wild: Hyrule Compendium</h1>
			</header>
			<main>
				<nav className='App__navigation'>
					<Link to='/Compendium'>
						<input
							className='App__navigation-button'
							type='button'
							value='Compendium'
						/>
					</Link>
					<Link to='/SearchCompendium'>
						<input
							className='App__navigation-button'
							type='button'
							value='Search'
						/>
					</Link>
					<Link to='/AboutCompendium'>
						<input
							className='App__navigation-button'
							type='button'
							value='About'
						/>
					</Link>
					<Link to='/'>
						<input
							className='App__navigation-button'
							type='button'
							value='Home'
						/>
					</Link>
				</nav>
				<Routes>
					<Route path='/SearchCompendium' element={<SearchCompendium />} />
					<Route path='/Details/:id' element={<Details />} />
					<Route path='/Compendium' element={<BotwCompendium />} />
					<Route path='/AboutCompendium' element={<AboutCompendium />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
