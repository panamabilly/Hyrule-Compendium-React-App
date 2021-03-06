import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import './BotwCompendium.css';

const equipcolumns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'name', headerName: 'Name', width: 200 },
	{ field: 'attack', headerName: 'Attack', width: 70 },
	{ field: 'defense', headerName: 'Defense', width: 70 },
	{ field: 'common_locations', headerName: 'Common Locations', width: 300 },
	{ field: 'description', headerName: 'Description', width: 1200 },
];

const monstercolumns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'name', headerName: 'Name', width: 200 },
	{ field: 'common_locations', headerName: 'Common Locations', width: 300 },
	{ field: 'drops', headerName: 'Drops', width: 900 },
	{ field: 'description', headerName: 'Description', width: 1500 },
];

const materialscolumns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'name', headerName: 'Name', width: 150 },
	{ field: 'hearts_recovered', headerName: 'Hearts Recovered', width: 150 },
	{ field: 'cooking_effect', headerName: 'Cooking Effect', width: 150 },
	{ field: 'description', headerName: 'Description', width: 1200 },
];

const foodcreaturescolumns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'name', headerName: 'Name', width: 150 },
	{ field: 'hearts_recovered', headerName: 'Hearts Recovered', width: 150 },
	{ field: 'cooking_effect', headerName: 'Cooking Effect', width: 150 },
	{ field: 'description', headerName: 'Description', width: 1500 },
];

const nonfoodcreaturescolumns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'name', headerName: 'Name', width: 200 },
	{ field: 'common_locations', headerName: 'Common Locations', width: 300 },
	{ field: 'drops', headerName: 'Drops', width: 400 },
	{ field: 'description', headerName: 'Description', width: 1450 },
];

const treasurecolumns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'name', headerName: 'Name', width: 200 },
	{ field: 'common_locations', headerName: 'Common Locations', width: 300 },
	{ field: 'drops', headerName: 'Drops', width: 500 },
	{ field: 'description', headerName: 'Description', width: 1500 },
];

function BotwCompendium(props) {
	const [equipData, setEquipData] = useState([]);
	const [treasureData, setTreasureData] = useState([]);
	const [foodCreaturesData, setFoodCreaturesData] = useState([]);
	const [nonfoodCreaturesData, setNonFoodCreaturesData] = useState([]);
	const [materialsData, setMaterialsData] = useState([]);
	const [monstersData, setMonstersData] = useState([]);

	let history = useNavigate();

	let url = 'https://botw-compendium.herokuapp.com/api/v2/all';
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setEquipData(json.data.equipment);
				setTreasureData(json.data.treasure);
				setFoodCreaturesData(json.data.creatures.food);
				setNonFoodCreaturesData(json.data.creatures.non_food);
				setMaterialsData(json.data.materials);
				setMonstersData(json.data.monsters);
			})
			.catch(console.error);
	}, []);

	return (
		<main>
			<div style={{ height: 500, width: '175%' }}>
				<h1> Compendium</h1>
				<h2>Equipment</h2>
				<DataGrid
					className='equipment-datagrid'
					rows={equipData}
					onCellClick={(equipData) => history(`/Details/${equipData.id}`)}
					columns={equipcolumns}
				/>
				<h2>Monsters</h2>
				<DataGrid
					className='monsters-datagrid'
					rows={monstersData}
					onCellClick={(monstersData) => history(`/Details/${monstersData.id}`)}
					columns={monstercolumns}
				/>
				<h2>Materials</h2>
				<DataGrid
					className='materials-datagrid'
					rows={materialsData}
					onCellClick={(materialsData) =>
						history(`/Details/${materialsData.id}`)
					}
					columns={materialscolumns}
				/>
				<h2> Creatures Non-Food Related</h2>
				<DataGrid
					className='nonfoodcreatures-datagrid'
					rows={nonfoodCreaturesData}
					onCellClick={(nonfoodCreaturesData) =>
						history(`/Details/${nonfoodCreaturesData.id}`)
					}
					columns={nonfoodcreaturescolumns}
				/>
				<h2>Creatures Food Related</h2>
				<DataGrid
					className='foodcreatures-datagrid'
					rows={foodCreaturesData}
					onCellClick={(foodCreaturesData) =>
						history(`/Details/${foodCreaturesData.id}`)
					}
					columns={foodcreaturescolumns}
				/>
				<h2>Treasures</h2>
				<DataGrid
					className='treasures-datagrid'
					rows={treasureData}
					onCellClick={(treasureData) => history(`/Details/${treasureData.id}`)}
					foodCreaturesData
					columns={treasurecolumns}
				/>
			</div>
		</main>
	);
}

export default BotwCompendium;
