import React from 'react'
import styled from 'styled-components';
import { panel1, panel2, enterGreen, enterHover, bots, downloadBG, download } from '../assets/images'
import Gif from './Gif';

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
	height: 131px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: linear-gradient(90deg, #0B0514 9.38%, #5F4DAA 52.08%, #0B0514 86.98%);
	& > a img {
		cursor: pointer;
		width: auto;
		height: 60px;
	}
	& > img {
		padding-top: .5rem;
		cursor: pointer;
		width: auto;
		height: 28px;
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
		height: 111px;
		& > a img {
			height: 40px;
		}
		& > img {
			height: 30px;
		}
	}
	@media (max-width: 600px) {
		height: 75px;
		& > a img {
			height: 25px;
		}
		& > img {
			height: 20px;
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

const Banner = styled('a')`
	text-decoration: none;
	& > div {
		display: flex;
		background-color: #710559;
		p {
			padding: 0 0 .5rem;
	    color: white;
	    -webkit-text-stroke: white;
	    position: relative;
	    width: 100%;
			animation-duration: 10s;
			animation-timing-function: linear;
			animation-fill-mode: backwards;
			animation-iteration-count: infinite;
			@media (max-width: 1300px) {
				font-size: 35px
			}
			@media (max-width: 950px) {
			    font-size: 28px;
			}
			@media (max-width: 760px) {
			    font-size: 22px;
			}
			@media (max-width: 600px) {
			    font-size: 18px;
			}
			@media (max-width: 450px) {
			    font-size: 13px;
			}
		}
		.text1 {
	    left: 0%;
	    animation-name: text-animation;
		}
		.text2 {
			left: 0%;
			animation-name: text-animation-2;
		}
	}
`;

const VideoWrapper = styled('div')`
	font-family: 'SpaceQuest'!important;
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100vh;
	width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
	background-image: url(${downloadBG});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	& > div {
		max-height: 550px;
		max-width: 1000px;
		position: relative;
		height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 1050px) {
    	max-height: 550px;
			max-width: 600px;
    }
		@media(max-width: 650px) {
			max-width: 95%;
		}
	}
	& .close {
		padding: 0rem 2rem .15rem;
		font-size: 33px;
		color: #ff1716;
		border: 2px solid black;
    -webkit-text-stroke: 1.25px black;
		position: absolute;
		top: 0;
		right: 0;
		cursor: pointer;
		&:before {
			content: '';
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			background: #ff1716;
			left: 0;
			top: 0;
			opacity: .5;
		}
		@media(max-width: 1050px) {
			top: -50px;
			font-size: 28px;
		}
		@media(max-width: 650px) {
			top: -33px;
			font-size: 20px;
		}
		@media(max-width: 850px) and (max-height: 500px) {
			top: 0px;
			margin-top: .5rem;
		}
	}
	& .instr {
		padding: 0rem 2rem .15rem;
		font-size: 50px;
		color: #d142de;
		border: 2px solid black;
    -webkit-text-stroke: 1.25px black;
		position: absolute;
		top: 0;
		&:before {
			content: '';
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			background: #36FCF5;
			left: 0;
			top: 0;
			opacity: .5;
		}
		@media(max-width: 1050px) {
			font-size: 37.5px;
		}
		@media(max-width: 850px) and (max-height: 500px) {
			margin-top: .5rem;
		}
		@media(max-width: 650px) {
			font-size: 30px;
		}
	}
	& .text {
		font-size: 40px;
		color: white;
		width: 100%;
		margin-bottom: .5rem;
		text-align: center;
		border: 2px solid white;
    -webkit-text-stroke: 1.25px black;
    position: relative;
    &.span {
    	margin-top: 10%;
    }
		&:before {
			content: '';
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			background: #36FCF5;
			left: 0;
			top: 0;
			opacity: .66;
		}
		&:nth-of-type(even) {
			&:before {
				background: #d142de;
			}
		}
		@media(max-width: 1050px) {
			font-size: 30px;
		}
		@media(max-width: 850px) and (max-height: 500px) {
			font-size: 24px;
		}
		@media(max-width: 650px) {
			font-size: 25px;
		}
	}
`;

export default function Hero() {

	const [img, setImg] = React.useState(enterGreen);
	const [markup, setMarkup] = React.useState();


	const Video = () => {
		return (
			<VideoWrapper>
				<div>
					<span className="close" onClick={handleClose}>Exit</span>
					<span className="instr">instructions</span>
					<span className="text span">drag the .zip file to a desktop folder</span>
					<span className="text">right click the .zip and extract all</span>
					<span className="text">double click "hoverbotborgs-105"</span>
					<span className="text">double click and open "hover brogs"</span>
					<span className="text">have fun! report any bugs/suggestions in our discord please!</span>
				</div>
			</VideoWrapper>
		)
	};

	const handleImg = () => {
		setImg(enterHover);
	};

	const handleEnter = () => {
		setImg(enterGreen);
	};

	const handleClick = () => {
		document.body.style.overflowY = "hidden";
		setMarkup(Video);
	};

	const handleClose = () => {
		document.body.style.overflowY = "visible"
	  setMarkup(null);
	};

	return (

		<div style={{overflow:'hidden'}}>
			{markup}
			<Enter>
				<a href="http://martiangames.com/clients/BotBorgs/xfer/BotBorgs.zip" download>
					<img src={img} onMouseLeave={handleEnter} onMouseEnter={handleImg} alt="borgverse" />
				</a>
				<img src={download}  onClick={handleClick} alt="download" />
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
			<Banner href="https://frames.botborgs.com" target="_blank">
				<div>
					<p className="textHeader text1">create a custom banner</p>
					<p className="textHeader text2">create a custom banner</p>
				</div>
			</Banner>
		</div>
	)
}