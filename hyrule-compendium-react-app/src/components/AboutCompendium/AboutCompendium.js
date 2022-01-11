import React from 'react';
import './AboutCompendium.css';

function AboutCompendium(props) {
	return (
		<main>
			<div class='card'>
				<div class='container'>
					<h4>
						<b>About</b>
					</h4>
					<p>
						Please click on the Compendium Button to see the entire Breath of
						the Wild Compendium separated into 6 categories. Non-Food Creatures,
						Food Creatures, Equipment, Monsters, Materials and Treasures.
					</p>
					<p>
						If you need to search a item detail please click on the Search
						button. You are able to search the compendium by name or id. You
						also have the ability to obtain the item details by clicking on the
						row of the compendium to get more details.
					</p>
					<p>
						Many thanks to Aarav Borthakur for creating the BOTW: Hyrule
						Compendium API and Nintendo for the image/art used in this page.
					</p>
				</div>
			</div>
		</main>
	);
}

export default AboutCompendium;
