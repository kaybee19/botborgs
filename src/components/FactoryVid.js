import React from 'react'
import styled from 'styled-components';
import { factory } from '../assets/images';

const Root = styled('div')`
	border-top: 7.5px solid #72045A;
	border-bottom: 7.5px solid #72045A;
`;

export default class FactoryVid extends React.Component {
	render() {
		return (
			<Root>
				<video style={{width: '100%'}} autoPlay muted loop>
				  <source src={factory} type="video/mp4" />
				</video>
			</Root>
		)
	}
}