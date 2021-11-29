import React from 'react'
import styled from 'styled-components';
import Bot from './Bot';
import { abilitiesBotborg, botlings } from '../assets/images';
import botUniverse from '../assets/images/botUniverse.mp4';

const Root = styled('div')`
	max-width: 1100px;
	padding: 0 2rem;
	margin: auto;
	position: relative;
`;

const BackG = styled('div')`
	background: linear-gradient(270deg, #0B0514 0%, #72045A 32.81%, #0B0514 71.35%);
	padding-bottom: 4rem;
	position: relative;
	overflow: hidden;
	&:before {
		position: absolute;
		content: '';
		top: -2.5px;
		left: -55px;
		background: radial-gradient(50% 50% at 50% 50%, #EA00EA 68.23%, rgba(234, 0, 234, 0) 100%);
		height: 8px;
		width: 110%;
	}

	&:after {
		position: absolute;
		content: '';
		bottom: -3px;
		left: -55px;
		background: radial-gradient(50% 50% at 50% 50%, #EA00EA 68.23%, rgba(234, 0, 234, 0) 100%);
		height: 8px;
		width: 110%;
	}
	@media (max-width: 600px) {
		&:before {
  	  left: -25px;
		}
		&:after {
  	  left: -25px;
		}
	}
`;

export default class Ablities extends React.Component {

	render() {

		const data = [
			{
				img: abilitiesBotborg, header: 'BOTBORGS', body: `The rulers of the Borgverse. Created by a grieving engineer attempting to reincarcerate his long lost wife through artificial intelligence and modern computing. All was going well until the engineer ran his final test: activating the program on a physical robot body that he had constructed. The lifeless robot miraculously sprung into motion and promptly put an end to the engineer's miserable life. Over the next 300 years, Botborgs reproduced and took control of the universe, renaming it to The Borgverse. Not only are Botborgs ruthless they are also extremely hard working when it comes to collecting $BOLT. $BOLT is the official currency that the Bots instituted within the Borgverse. Each Botborg produces 12 $BOLT per day. If you truly want to get a taste of what power feels like in the Borgverse, we recommend picking up a few Bots.`,
				list: [
					{ text:'Earn 12 $BOLT per day.' },
					{ text:'Ability to breed a Botling through the mating of 2 Botborgs with the addition of $BOLT.' },
					{ text:'Access to private planets and events that are separated from the peasant dwellers. ' },
					{ text:'Exclusive priority access to Borgverse planet auctions and properties.' },
					{ text:'Exclusive airdrops and whitelist collaborations.' },
					{ text:'Governance over the Borgverse and all of its inhabitants.' },
				]
			},
			{
				img: botlings, header: 'BOTLINGS', body: 'These are assembled through the hard work of 2 Botborgs and some $BOLT ‘s. The botlings however are an extremely intricate specimen of robot that requires a total of TBD $BOLT ‘s to assemble. This may seem like alot of $BOLT but the larger your army of Botborgs, the faster they are able to produce the $BOLT ‘s necessary to begin the formation of a Botling. However, there is a catch. Over the 300 years of breeding the Botborgs have undergone an evolutionary adaptation in order to continue thriving in their ecosystem. This change will be reflected through the Botlings with a completely different art style.',
				list: [
					{ text:'Access to exclusive planets and events that are only available to the Botlings. ' },
					{ text:'Exclusive Botling only community in discord.' },
					{ text:'Various benefits within the Borgverse including faster travel and priority access to land expansions.' },
					{ text:'Exclusive airdrops and whitelist collaborations.' },
					{ text:'Governance over the Borgverse and all of its inhabitants.' },
					{ text:'TO BE CONTINUED' },
				]
			},
			{
				vid: botUniverse, header: 'PLANET OWNERS', body: 'New planets are constantly being built in the Borgverse. Whether it be a PVP shooter, a gallery, a headquarters, an aim trainer, a residential area, a parkour arena, the possibilities are endless. However, planets often appear in the Borgverse completely empty without a structure in site. The bots are looking for monarchs to come in and instruct them on what needs to be built on these planets so that they can return to their former glory. The public will be able to bid on planet ownership with construction beginning immediately after a Monarch has been crowned as the owner of the planet. ',
				list: [
					{ text:'Planet auctions will be extremely scarce.' },
					{ text:'The winner of the auction will have the ability to custom build anything (advertising, company/project headquarters, etc) they want on their planet with our art team behind the entire construction process. ' },
					{ text:'Full authority over the name of the planet. ' },
					{ text:'Ability to decide the location of a planet within Borgverse. ' },
					{ text:'Exclusive planet owner discord where owners can speak with each other and the team. ' },
				]
			},
		];

		return (
			<BackG>
				<Root>
					<p style={{textAlign:'center'}} className="textHeader">The Bots and their abilities</p>
					{
						data.map((d, i) => (
							<Bot img={d.img} vid={d.vid} header={d.header} body={d.body} list={d.list} key={i} />
						))
					}
				</Root>
			</BackG>
		)
	}
}