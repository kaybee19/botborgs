import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { data } from '../data'

const Root = styled('div')`
	padding: 0 0 5rem 2rem;
	margin: auto;
	margin-left: 140px;
	position: relative;
	& .member {
		min-height: 470px;
		margin-top: 2.5rem;
		display: flex;
		& > div {
			display: flex;
	    flex-direction: column;
	    position: relative;
	    &:hover {
    		&:before {
    			position: absolute;
    			content: "";
    			width: calc(100% - 2.5px);
    			height: calc(100% - 5px);
	    		border: 2px solid rgb(114, 4, 90);
    		}
    		transition: 1s;
    	}
    }
	}
	& .alice-carousel__wrapper {
		padding-left: 0!important;
	}
	& .alice-carousel__stage-item {
    min-height: 510px;
	}
	& .alice-carousel__prev-btn-item > span, & .alice-carousel__next-btn-item > span {
		position: absolute;
		top: -25px;
		right: 100px;
		width: 100px;
		&:after {
	    content: "\\2192";
			position: absolute;
			height: 50px;
			top: 0;
			font-size: 2rem;
			left: 50px;
			width: 50px;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		@media (max-width: 900px) {
			top: -40px;
			right: 50px;
		}
	}
	& .alice-carousel__prev-btn-item > span {
		&:after {
			content: "\\2190";
			left: 0px;
		}
	}
	@media (max-width: 1100px) {
		margin-left: 0px;
	}
`;

const Body = styled('div')`
	width: 285px;
	min-height: 185px;
	background: #202230;
`;

const Image = styled('img')`
	width: 285px;
	height: 285px;
	object-fit: cover;
`;

const Member = (props) => {
	return (
		<Link to={`/team/${props.id}`} className="member linkClass">
			<div>		
				<Image src={props.img} alt={props.title} />
				<Body>
					<div style={{padding: '1rem'}}>
						<p className="font-space" style={{margin:0, fontSize:24}}>{props.name}</p>
						<p style={{marginTop:0, fontSize:18, color:'#FAB2EA'}}>{props.title}</p>
						<p style={{marginTop:0, fontSize:18}}>{props.text}</p>
					</div>
				</Body>
			</div>
		</Link>
	)
}

export default function Team(props) {	

	const responsive = {
			300: { items: 1 },
	    660: { items: 2 },
	    950: { items: 3 },
	    1400: { items: 4 },
	};

	return (
		<Root>
			<p className="textHeader" style={{paddingTop:'2rem',paddingBottom:0, textAlign: props.style}}><span style={{color:'white'}}>the</span> team</p>
			{props.team}
	    <AliceCarousel
	        items={
	        	data.map((d, i) => <Member id={d.id} img={d.img} title={d.title} name={d.name} title={d.title} text={d.text} /> )
	        }
	        controlsStrategy="alternate"
	        autoHeight
	        paddingRight={50}
	        disableDotsControls={true}
	        responsive={responsive}
	    />
			
		</Root>
	)
}
