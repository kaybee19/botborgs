import React from 'react'
import styled from 'styled-components';
import { futureVid } from '../assets/images';

const Root = styled('div')`
  overflow: hidden;
	& video {
		height: 650px;
		width: auto!important;
	}
`;

export default class HeroVideo extends React.Component {
	render() {
		return (
			<Root>
				<video style={{display: 'block', width: '100%'}} autoPlay muted loop>
				  <source src={futureVid} type="video/mp4" />
				</video>
			</Root>
		)
	}
}