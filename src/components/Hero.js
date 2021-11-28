import React from 'react'
import styled from 'styled-components';
import Gif from './Gif';
import { panel1, panel2, enterGreen, enterHover, bots } from '../assets/images'

const BackG = styled('div')`
	background: linear-gradient(180deg, #4D3A8A 10.94%, #322459 44.27%, #0B0514 91.67%);
	padding-bottom: 4rem;
`;

const Root = styled('div')`
	padding: 5rem 0 0;
	margin: auto;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > div:first-of-type {
		margin-top: -50px;
	}
	& img {
		height: fit-content;
		width: 750px;
		@media (max-width: 1450px) {
			width: 659px;
		}
		@media (max-width: 900px) {
			width: 350px;
		}
	}
	@media (max-width: 1200px) {
		& img {
			width: 450px;
		}
	}
	@media (max-width: 900px) {
		flex-direction: column;
		& img {
			width: 450px;
			margin-left: auto;
			&:first-of-type {
				margin-top: 0;
				margin-right: auto;
				margin-left: 0;
				margin-bottom: 3rem;
			}
		}
	}
	@media (max-width: 600px) {
		& img {
			width: 375px;
		}
	}
`;

const ImageLeft = styled('div')`
	position: relative;
	@media (max-width: 900px) {
		margin-right: auto;
	}
`;

const ImageRight = styled('div')`
	position: relative;
	&:after {
		content: "";
		display: block;
		position: absolute;
		background-image: url(${bots});
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
    height: 355px;
    width: 355px;
    top: 267px;
    left: 90px;
	}
	@media (max-width: 1450px) {
		&:after {
			height: 312px;
			width: 312px;
			top: 234.5px;
			left: 80px;
		}
	}
	@media (max-width: 1200px) {
		&:after {
			height: 213px;
			width: 213px;
			top: 160px;
			left: 55px;
		}
	}
	@media (max-width: 900px) {
		margin-left: auto;
	}
	@media (max-width: 600px) {
		&:after {
	    height: 177px;
	    width: 177px;
	    top: 134px;
	    left: 45px;
		}
	}
`;

const Enter = styled('div')`
	position: relative;
	height: 96px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(90deg, #0B0514 9.38%, #5F4DAA 52.08%, #0B0514 86.98%);
	& img {
		cursor: pointer;
		width: auto;
		height: 60px;
	}
	&:before {
		position: absolute;
		content: '';
		top: -2.5px;
		left: 0;
		background: radial-gradient(50% 50% at 50% 50%, #2F1D5F 68.23%, rgba(95, 83, 149, 0) 100%);
		height: 8px;
		width: 100%;
	}
	&:after {
		position: absolute;
		content: '';
		bottom: -2.5px;
		left: 0;
		background: radial-gradient(50% 50% at 50% 50%, #2F1D5F 68.23%, rgba(95, 83, 149, 0) 100%);
		height: 8px;
		width: 100%;
	}
	@media (max-width: 900px) {
		height: 75px;
		& img {
			height: 40px;
		}
	}
	@media (max-width: 600px) {
		height: 50px;
		& img {
			height: 25px;
		}
	}
`;

const Text = styled('div')`
	background: linear-gradient(90deg, rgba(11, 5, 20, 0.84) 0%, #3A2F65 51.56%, rgba(11, 5, 20, 0.84) 100%);
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px 0px #00000040 inset;
	padding: 0 10px;
	color: #EA00EA;
	text-transform: uppercase;
	font-size: 52px;
	line-height: 62px;
	width: fit-content;
	margin: auto;
	cursor: pointer;
	@media (max-width: 900px) {
		font-size: 30px;
    line-height: 40px;
	}
	@media (max-width: 600px) {
		font-size: 20px;
    line-height: 30px;
	}
`;

export default function Hero() {

	const [img, setImg] = React.useState(enterGreen);

	const handleImg = () => {
		setImg(enterHover);
	}

	const handleEnter = () => {
		setImg(enterGreen);
	}


	return (

		<div>
			<Enter>
				<img src={img} onMouseLeave={handleEnter} onMouseEnter={handleImg} alt="borgverse" />
			</Enter>
			<BackG>
				<Root>
					<ImageLeft>
						<img src={panel1} alt="panel left" />
						<Gif />
					</ImageLeft>
					<ImageRight>
						<img className="gifClass" src={panel2} alt="panel right" />
					</ImageRight>
				</Root>
			</BackG>
		</div>
	)
}