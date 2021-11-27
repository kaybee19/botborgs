import React from 'react'
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const Root = styled('div')`
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	display: flex;
	align-items: center;
	padding: 1.5rem 0;
	width: 100%;
	position: relative;
	& img {
		width: auto;
		height: 375px;
	}
	& ul {
		margin-top: .5rem;
		padding-left: 1.5rem;
	}
	& li {
    margin-bottom: -2.5px;
	}
	@media (max-width: 1100px) {
		align-items: flex-start;
		& img {
			height: 200px;
		}
	}
	@media (max-width: 900px) {
		& img {
			height: 150px;
		}
	}
	@media (max-width: 750px) {
		& img {
			height: 100px;
		}
	}
	@media (max-width: 600px) {
		flex-direction: column;
		& img {
			width: 100%;
			height: auto
		}
	}
`;

const Body = styled('div')`
	padding: .25rem 2.5% 0rem 5%;
	position: relative;
	z-index: -1;
	left: -2.5px;
	background: #202230;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 100%;
	min-height: 80%;
	@media (max-width: 600px) {
		padding: 0;
		left: 0;
		& > div {
			padding: .25rem 2.5% 0rem 5%;
		}
	}
`;

export default function Bot(props) {

	const { img, header, body, list } = props;

	return (
		<Root>
			<img src={img} alt={`${header}-bot`} />
			<Body>
				<div>
					<p className="textSub">{header}</p>
					<Typography sx={{fontSize: 12.5}} className="font-robot">{body}</Typography>
					<ul>
						{
							list.map((l, i) => (
								<li key={i}><Typography variant="caption" className="font-robot">{l.text}</Typography></li>
							))
						}
					</ul>
				</div>
			</Body>
		</Root>
	)
}
