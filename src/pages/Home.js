import React from 'react';

// Comps
import HeroVideo from '../components/HeroVideo';
import Hero from '../components/Hero';
import Ablities from '../components/Ablities';
import RoadMap from '../components/RoadMap';
import FAQ from '../components/FAQ';
import FactoryVid from '../components/FactoryVid';
import CTA from '../components/CTA';

export default function Home() {

	return (
		<React.Fragment>
			<HeroVideo />
			<Hero />
			<Ablities />
			<RoadMap />
			<FAQ />
			<FactoryVid />
			<CTA />
		</React.Fragment>
	);
};