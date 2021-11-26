import React from 'react'
import styled from 'styled-components';
import { futureVid } from '../assets/images';

export default class HeroVideo extends React.Component {
	render() {
		return (
			<div style={{maxHeight: 810}}>
				<video style={{width: '100%'}} autoPlay muted loop>
				  <source src={futureVid} type="video/mp4" />
				</video>
			</div>
		)
	}
}