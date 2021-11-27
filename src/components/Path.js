import React from 'react'
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const Root = styled('div')`
	position: relative;
	display: flex;
	padding: 2.5rem 0;
	height: 100%;
	align-items: center;
	&:nth-of-type(even) {
		.pathBody {
			flex-direction: row-reverse;
		}
	}
	&:first-of-type {
		.pathBorder {
			height: 50%;
    	bottom: 0;
    	&:before {
    		top: 0;
    	}
		}
	}
	&:last-of-type {
		.pathBorder {
			height: 50%;
    	top: 0;
    	&:before {
    		top: 100%;
    	}
		}
	}
	@media (max-width: 600px) {
		& .pathBorder {
			display: none;
		}
	}
`;

const Border = styled('div')`
	height: 100%;
	width: 6px;
	position: absolute;
	background-color: #72045A;
	&:before {
		position: absolute;
		display: flex;
		align-items: center;
		top: 50%;
		left: -20px;
		z-index: 1;
		content: '';
		width: 33px;
		height: 33px;
		border: 6px solid white;
		background-color: #72045A;
		transform: rotate(45deg);
	}
`;

const Body = styled('div')`
	padding: .5rem 1rem;
	margin-left: 84px;
	background-color: #202230;
	max-width: 900px;
	position: relative;
	display: flex;
	align-items: center;
	@media (max-width: 800px) {
		flex-direction: column!important;
	}
	@media (max-width: 600px) {
		margin-left: 0px;
	}
`;

const Text = styled('p')`
	font-family: Robotika;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
`;

const Box = styled('div')`
	min-width: 340px;
	@media (max-width: 950px) {
		display: none;
	}
`;

const Image = styled('img')`
	position: absolute;
	top: 0;
	&.borgverse {
    right: -175px;
    height: 107.5%;
    width: auto;
    top: -15px;
    @media (max-width: 1280px) {
    	right: -133px;
    	height: 100%;
    	top: 0px;
    }
    @media (max-width: 1190px) {
    	right: -100px;
    	height: 90%;
    	top: 0px;
    }
    @media (max-width: 1100px) {
    	height: 85%;
    }
	}
	&.interplanetary {
    left: -50px;
    height: 112.5%;
    width: auto;
    top: -30px;
    @media (max-width: 1100px) {
    	height: 100%;
    }
	}
	&.games {
    right: 0px;
    height: 140%;
    width: auto;
    top: -75px;
    @media (max-width: 1100px) {
    	height: 120%;
    }
	}
	&.home {
    left: -85px;
    height: 127.5%;
    width: auto;
    top: -60px;
    @media (max-width: 1100px) {
    	height: 110%;
    }
	}
	&.artists {
    right: -25px;
    height: 133%;
    width: auto;
    top: -75px;
    transform: rotate(10deg);
    @media (max-width: 1100px) {
    	height: 120%;
    }
	}
	@media (max-width: 950px) {
		position: relative;
		min-width: 300px;
		width: 50%!important;
		height: auto;
		left: 0!important;
		right: 0!important;
		top: 0!important;
	}
`;

export default function Path(props) {

	const { img, header, body, className } = props;

	return (
		<Root>
			<Border className="pathBorder" />
			<Body className="pathBody">
				<div>
					<p style={{color:'white'}} className="textSub">{header}</p>
					<Text className="font-robot" sx={{fontWeight:500}}>{body}</Text>
				</div>
				<Box />
				<Image src={img} className={className} width='350' alt={header} />
			</Body>
		</Root>
	)
}