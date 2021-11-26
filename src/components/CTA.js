import React from 'react'
import styled from 'styled-components';
import { twitter, discord } from '../assets/images'

const Root = styled('div')`
	max-width: 1100px;
	padding: 7.5rem 2rem;
	margin: auto;
	position: relative;
`;

const BackG = styled('div')`
	background: linear-gradient(180deg, #0B0514 0%, #72045A 100%);
	padding-bottom: 4rem;
`;

const Text = styled('p')`
	font-size: 72px;
	line-height: 120%;
	text-align: center;
	color: white;
`;

const Call = styled('div')`
	border: 2px solid #4F4185;
	padding: 19px 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-width: 242px;
	margin: 0 1rem;
	& p {
		padding-left: 1rem;
		font-size: 18px;
	}
`;

export default class CTA extends React.Component {

	render() {

		return (
			<BackG>
				<Root>
					<Text className="textHeader">THE BOTBORGS ARE TAKING OVER THE METAVERSE</Text>
					<div style={{display:'flex', width:'100%', justifyContent:'center'}}>
						<a target="_blank" class="linkClass" href="https://twitter.com">
							<Call style={{minWidth: 329}}>
								<img src={discord} width="18" alt="twitter-logo" />
								<p className="font-coven" style={{margin:0}}>Join the community</p>
							</Call>
						</a>
						<a target="_blank" class="linkClass" href="https://discord.com">
							<Call>
								<img src={twitter} width="18" alt="twitter-logo" />
								<p className="font-coven" style={{margin:0}}>Follow Us</p>
							</Call>
						</a>
					</div>
				</Root>
			</BackG>
		)
	}
}