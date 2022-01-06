import { DataGrid } from '@mui/x-data-grid';
import './App.css';
import BotwCompendium from './components/BotwCompendium/BotwCompendium';
import DataTable from './components/BotwCompendium/BotwCompendium';

function App() {
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
				<BotwCompendium />
			</main>
		</div>
	);
}

export default App;
