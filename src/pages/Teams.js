import React from 'react'
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Team from '../components/Team';
import FactoryVid from '../components/FactoryVid';
import CTA from '../components/CTA';
import { data } from '../data'

const BackG = styled('div')`
	padding-top: 10%;
	background: linear-gradient(180deg, #72045A 0%, #0B0514 50%);
	padding-bottom: 4rem;
`;

const Image = styled('img')`
	width: 400px;
	height: 400px;
	object-fit: cover;
	padding: 1rem;
	margin-right: 2rem;
	@media (max-width: 900px) {
		width: 300px;
		height: 300px;
	}
	@media (max-width: 750px) {
		width: 100%;
		height: 100%;
		margin: 0;
	}
`;

const Body = styled('div')`
	margin: 5rem 0;
	max-width: 1100px;
	display: flex;
	align-items: center;
	@media (max-width: 900px) {
		padding-right: 2rem;
	}
	@media (max-width: 750px) {
		flex-direction: column;
	}
`;

export default function Teams() {

	React.useEffect(() => {
	  window.scrollTo(0, 0)
	});

	const location = useLocation();
	const path = location.pathname.split('team/')[1];
	const getMember = data.filter(f => f.id === path)[0];

	const markUp = (
		<Body>
			<Image src={getMember.img} alt={getMember.id} />
			<div>
				<p className="font-space" style={{margin:0, fontSize:24}}>{getMember.name}</p>
				<p style={{marginTop:0, fontSize:18, color:'#FAB2EA'}}>{getMember.title}</p>
				<p style={{marginTop:0, fontSize:18}}>{getMember.body}</p>
			</div>
		</Body>
	)

	return (
		<BackG>
				<Team style="center" team={markUp} />
				<FactoryVid />
				<CTA />
		</BackG>
	)
}