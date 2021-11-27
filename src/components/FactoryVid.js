import React from 'react'
import styled from 'styled-components';
import { factory } from '../assets/images';

const Root = styled('div')`
  background: #710559;
  overflow: hidden;
	border-top: 7.5px solid #72045A;
	border-bottom: 7.5px solid #72045A;
	@media (max-width: 600px) {
		& video {
			height: 500px;
			position: relative;
			right: 75%;
			width: auto!important;
		}
	}
	@media (max-width: 450px) {
		& video {
			right: 135%;
		}
	}
`;

export default class FactoryVid extends React.Component {
	render() {
		return (
			<Root>
				<video style={{display: 'block', width: '100%'}} autoPlay muted loop>
				  <source src={factory} type="video/mp4" />
				</video>
			</Root>
		)
	}
}