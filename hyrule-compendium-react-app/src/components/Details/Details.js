import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details(props) {
	const [idData, setIdData] = useState([]);
	const [nameData, setNameData] = useState([]);
	const [attackData, setAttackData] = useState([]);
	const [defenseData, setDefenseData] = useState([]);
	const [categoryData, setCategoryData] = useState([]);
	const [locationData, setLocationData] = useState([]);
	const [descriptionData, setDescriptionData] = useState([]);
	const [imageData, setImageData] = useState([]);
	const [dropsData, setDropsData] = useState([]);
	const [heartsrecoveredData, setHeartsRecoveredData] = useState([]);
	const [cookingeffectData, setCookingEffectData] = useState([]);

	const entryurl = 'https://botw-compendium.herokuapp.com/api/v2/entry/';

	const { id } = useParams();

	useEffect(() => {
		const url = `${entryurl}${id}`;
		console.log(id);
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setIdData(json.data.id);
				setNameData(json.data.name);
				setAttackData(json.data.attack);
				setCategoryData(json.data.category);
				setLocationData(json.data.common_locations);
				setDefenseData(json.data.defense);
				setDescriptionData(json.data.description);
				setImageData(json.data.image);
				setDropsData(json.data.drops);
				setHeartsRecoveredData(json.data.hearts_recovered);
				setCookingEffectData(json.data.cooking_effect);
			})
			.catch(console.error);
	}, []);

	return (
		<main>
			<h2>Hyrule Compendium: Item Details</h2>

			<table>
				<thead>
					<tr>
						<td>Name</td>
						<td>{nameData}</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>ID:</td>
						<td>{idData}</td>
					</tr>
					<tr>
						<td>Category:</td>
						<td>{categoryData}</td>
					</tr>
					<tr>
						<td>Location:</td>
						<td>{locationData}</td>
					</tr>
					<tr>
						<td>Drops:</td>
						<td>{dropsData}</td>
					</tr>

					<tr>
						<td>Attack:</td>
						<td>{attackData}</td>
					</tr>
					<tr>
						<td>Defense:</td>
						<td>{defenseData}</td>
					</tr>
					<tr>
						<td>Hearts Recovered:</td>
						<td>{heartsrecoveredData}</td>
					</tr>
					<tr>
						<td>Cooking Effect:</td>
						<td>{cookingeffectData}</td>
					</tr>

					<tr>
						<td>Description: </td>
						<td>{descriptionData}</td>
					</tr>
					<tr>
						<td>Image: </td>
						<td>
							<img src={imageData} alt={nameData} />
						</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
}

export default Details;
