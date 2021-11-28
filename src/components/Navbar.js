import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { botborgs, medium, twitter, discord } from '../assets/images';

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

const Image = styled('div')`
	background-color: #EA00EA;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 1rem;
	& img {
		filter: brightness(0%);
	}
`;

const Body = styled('div')`	
	display: flex;
	align-items: center;
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
						<Image>
							<img src={discord} alt="discord" width="25" />
						</Image>
					</a>
					<a href="https://twitter.com/Botborgs" target="_blank">
						<Image>
							<img src={twitter} alt="twitter" width="25" />
						</Image>
					</a>
					<a href="https://medium.com/@botborgs" target="_blank">
						<Image>
							<img src={medium} alt="medium" width="25" />
						</Image>
					</a>
				</Body>
			</Root>
		)
	}
}