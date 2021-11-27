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
	& > div {
		display: flex;
		align-items: center;
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

export default class Navbar extends React.Component {

	render() {

		return (
			<Root>
				<Link to="/">
					<img src={botborgs} width="260" alt="logo" />
				</Link>
				<div>
					<a href="https://discord.com" target="_blank">
						<Image>
							<img src={discord} alt="discord" width="25" />
						</Image>
					</a>
					<a href="https://twitter.com" target="_blank">
						<Image>
							<img src={twitter} alt="twitter" width="25" />
						</Image>
					</a>
					<a href="https://medium.com" target="_blank">
						<Image>
							<img src={medium} alt="medium" width="25" />
						</Image>
					</a>
				</div>
			</Root>
		)
	}
}