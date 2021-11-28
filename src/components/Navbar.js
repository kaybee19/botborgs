import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { botborgs, mediumLogo, twitterLogo, discordLogo } from '../assets/images';

const Root = styled('div')`
	position: absolute;
	z-index: 10;
	left: 0;
	top: 0;
	right: 0;
	padding: 2.5% 8.5%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled('img')`
	width: 260px;
	height: auto;
	@media (max-width: 900px) {
		width: 200px;
	}
	@media (max-width: 600px) {
		width: 150px;
	}
`;

const Body = styled('div')`	
	display: flex;
	align-items: center;
	& img {
		margin-left: 1rem;
	}
	@media (max-width: 900px) {
		display: none;
	}
`;

export default class Navbar extends React.Component {

	render() {

		return (
			<Root>
				<Link to="/">
					<Logo src={botborgs} alt="logo" />
				</Link>
				<Body>
					<a href="https://discord.com/invite/7vtqB5yshV" target="_blank">
						<img src={discordLogo} alt="discord" width="42" />
					</a>
					<a href="https://twitter.com/Botborgs" target="_blank">
						<img src={twitterLogo} alt="twitter" width="42" />
					</a>
					<a href="https://medium.com/@botborgs" target="_blank">
						<img src={mediumLogo} alt="medium" width="42" />
					</a>
				</Body>
			</Root>
		)
	}
}