import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Details(props) {
	const [equipData, setEquipData] = useState([]);
	const [treasureData, setTreasureData] = useState([]);
	const [foodCreaturesData, setFoodCreaturesData] = useState([]);
	const [nonfoodCreaturesData, setNonFoodCreaturesData] = useState([]);
	const [materialsData, setMaterialsData] = useState([]);
	const [monstersData, setMonstersData] = useState([]);

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
		<footer>
			<h2>Details</h2>

			<table>
				<thead>
					<th>Detailed Item</th>
					<th>MasterSword</th>
				</thead>
				<tr>
					<td>Category</td>
					<td>Equipment</td>
				</tr>
				<tr>
					<td>Location</td>
					<td>Lost Woods</td>
				</tr>
				<tr>
					<td>Attack</td>
					<td>30</td>
				</tr>
				<tr>
					<td>Defense</td>
					<td>0</td>
				</tr>
				<tr>
					<td>
						The legendary sword that seals the darkness. Its blade gleams with a
						sacred luster that can oppose the Calamity. Only a hero chosen by
						the sword itself can wield it.
					</td>
				</tr>
			</table>
		</footer>
	);
}

export default Details;
