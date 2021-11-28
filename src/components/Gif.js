import React from 'react'
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const Body = styled('div')`
  position: absolute;
  z-index: 1;
  top: 215px;
  left: 266px;
  font-size: 24px;
  width: 425px;
  color: #b5dff0;
  text-align: center;
  @media (max-width: 1450px) {
	  top: 200px;
	  left: 240px;
	  width: 360px;
	  font-size: 20px;
  }
  @media (max-width: 1200px) {
    width: 250px;
    top: 130px;
    left: 160px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    width: 200px;
    top: 110px;
    left: 140px;
    font-size: 11.5px;
  }
`;

export default class Gif extends React.Component {

	render() {

		const text = "Botborgs are a collection of  unique and original 3D Bots that double as your key into the Botborg ecosystem. Our ecosystem begins with Bots at the forefront. Additional companions and materials are traveling through the galaxy and will arrive soon for backup. Don’t miss your opportunity at entering the Borgverse at the core stage, or you’ll be upset when we hop into our spaceships and blast off to another planet.";

		return (
			<Body>
        <p style={{margin:0}}>{text}</p>				
			</Body>
		)
	}
}