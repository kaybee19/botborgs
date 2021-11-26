import React from 'react'
import styled from 'styled-components';
import { copy, medium, twitter, discord } from '../assets/images';

const Root = styled('div')`
	background: black;
	padding: 2.5% 2.5% 2.5% 8.5%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& img {
		margin-right: 2rem;
	}
`;

const Text = styled('p')`
	font-size: 48px;
	line-height: 57px;
	margin: 0;
`;

export default class Footer extends React.Component {

	render() {

		return (
			<Root>
				<div>
					<a class="linkClass" target="_blank" href="https://medium.com"><img src={medium} alt="medium" width="37.5" /></a>
					<a class="linkClass" target="_blank" href="https://twitter.com"><img src={twitter} alt="twitter" width="37.5" /></a>
					<a class="linkClass" target="_blank" href="https://discord.com"><img src={discord} alt="discord" width="37.5" /></a>
				</div>
				<Text className="font-space"><img width="36" style={{marginRight:5}} src={copy} alt="copyright" />2021 botborgs</Text>
			</Root>
		)
	}
}