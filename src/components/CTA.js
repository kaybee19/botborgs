import React from 'react'
import styled from 'styled-components';
import { twitter, discord } from '../assets/images'

const Root = styled('div')`
	max-width: 1100px;
	padding: 7.5rem 2rem;
	margin: auto;
	position: relative;
	@media (max-width: 600px) {
		padding: 2rem;
	}
`;

const BackG = styled('div')`
	background: linear-gradient(180deg, #0B0514 0%, #72045A 100%);
	padding-bottom: 4rem;
`;

const Text = styled('p')`
	text-align: center;
`;

const Div = styled('div')`
	display: flex;
	width: 100%;
	justify-content: center;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`

const Call = styled('div')`
	border: 2px solid #4F4185;
	padding: 19px 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-width: 300px;
	margin: 0 1rem;
	& p {
		padding-left: 1rem;
		font-size: 18px;
	}
	@media (max-width: 900px) {
		min-width: 250px;
		& p {
			font-size: 14px;
		}
	}
	@media (max-width: 600px) {
		min-width: 200px;
		max-width: 200px;
		margin: auto;
		margin-top: 1rem;
		& p {
			font-size: 13px;
		}
	}
`;

export default class CTA extends React.Component {

	render() {

		return (
			<BackG>
				<Root>
					<Text className="textHeader">THE BOTBORGS ARE TAKING OVER THE METAVERSE</Text>
					<Div>
						<a target="_blank" class="linkClass" href="https://discord.com/invite/7vtqB5yshV">
							<Call>
								<img src={discord} width="18" alt="twitter-logo" />
								<p className="font-coven" style={{margin:0}}>Join the community</p>
							</Call>
						</a>
						<a target="_blank" class="linkClass" href="https://twitter.com/Botborgs">
							<Call>
								<img src={twitter} width="18" alt="twitter-logo" />
								<p className="font-coven" style={{margin:0}}>Follow Us</p>
							</Call>
						</a>
					</Div>
				</Root>
			</BackG>
		)
	}
}