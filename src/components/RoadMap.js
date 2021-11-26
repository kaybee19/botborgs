import React from 'react'
import styled from 'styled-components';
import Path from './Path';
import { artists, home, interplanetary, games, borgverse } from '../assets/images';

const Root = styled('div')`
	max-width: 1100px;
	padding: 0 2rem 5rem;
	margin: auto;
	position: relative;
`;

const BackG = styled('div')`
	background: linear-gradient(270deg, #72045A 0%, #0B0514 50%);
	padding-bottom: 4rem;
	position: relative;
	overflow: hidden;
	&:after {
		position: absolute;
		content: '';
		bottom: -3px;
		left: -55px;
		background: radial-gradient(50% 50% at 50% 50%, #EA00EA 68.23%, rgba(234, 0, 234, 0) 100%);
		height: 8px;
		width: 110%;
	}
`;

export default class RoadMap extends React.Component {

	render() {

		const data = [
			{ className: 'borgverse', header: "The borgverse", body: "We are building a gamified open world ecosystem that consists of planets, games, attractions and much more. You got a taste of it when entering the website. The Borgverse is built around providing an immersive and entertaining experience for all users. There are planets dedicated to galleries, first person shooters, parkour, aim training, new project discovery, collaborations, project headquarters, influencer exposure, gambling, and much more. Planets are constantly being worked on and added into the galaxy so that the experiences are endless.", img: borgverse},
			{ className: 'interplanetary', header: "Interplanetary Travel", body: "Planets will reside inside of the Borgverse. To travel from planet to planet you will need to either fly your spaceship through the galaxy or pass through a teleporter. Your 3d spaceship is equipped with a weapon that you will use to defend yourself from other players and bots. The spaceships will eventually be completely customizable for holders so that they stand out amongst others.", img: interplanetary},
			{ className: 'games', header: "The Games", body: "The Borgverse has a ton of games threaded into it, whether it comes to the planets themselves or flying through the galaxy, we're sure you’ll find one that you enjoy. We even have a casino coming, for all the degenerates out there. All of the games will be accessible for the public to ensure a wider audience is reachable. The twist however is that the daily rewards and prizes for participants of these games will only be distributed to holders. We are currently working on several systems to make daily reward distribution as effective as possible for holders. A Litepaper regarding the tokenomics of the Borgverse and the games within it will be published shortly.", img: games},
			{ className: 'home', header: "Home Ownership", body: "We plan to integrate home ownership for ALL holders. This means that every holder will get their own home on a residential planet within the Borgverse. Due to the large number of homes that will exist, a user friendly directory system will be made. In their homes, holders will be able to show off their NFTs in 3D environments accessible to all players. All of the residential planets will have different terrains which will decide the style of the homes on them. This will be one of the most captivating ways to display your NFTs for others to view as well as a great way to connect with other users that are coming to visit your planet/residency. ", img: home},
			{ className: 'artists', header: "Artist Empowerment", body: "Here at Botborgs we have a diverse team of 7 artists that are incredible at what they do. Whilst sifting through possible candidates for our project, we realized how many amazing artists are out there and getting little to no attention. We decided to establish a system within our project where every 2 weeks we will find an amazing artist that produces high quality work and is having a hard time getting exposure. With this artist we will create several Botborgs themed 1/1 pieces that will be integrated into our galaxy in one way or another and then auctioned off to the highest bidder with all of the proceeds going to the artist. Aside from the auctions we will onboard the artists into the solana ecosystem and get them started on both their twitter/holaplex setups. Bringing in more talent and artists into the solana ecosystem benefits us all as a whole.", img: artists},
		]

		return (
			<BackG>
				<Root>
					<div>
						<p className="textHeader" style={{paddingBottom:0}}>Flightpath</p>
						<p className="textSubHeader">Blasting into Mission #001<br/>This is just the beginning</p>
						{data.map((d, i) => (
							<Path header={d.header} className={d.className} body={d.body} img={d.img} />
						))}
					</div>
				</Root>
			</BackG>
		)
	}
}