import React from 'react'
import Team from '../components/Team';
import styled from 'styled-components';
import FaqAccordion from './FaqAccordion';

// Hook for checking viewport + animation package
import { useInView } from 'react-hook-inview';
import SmoothList from 'react-smooth-list';

const Root = styled('div')`
	max-width: 1100px;
	padding: 0 2rem 5rem;
	margin: auto;
	position: relative;
`;

const BackG = styled('div')`
	background: linear-gradient(180deg, #72045A 0%, #0B0514 50%);
`;

const Body = styled(SmoothList)`
	max-width: 996px;
	margin: 3rem auto auto;
	background: #202230;
`;

export default function FAQ(props) {

	const [view, setView] = React.useState(false);
  const [ref, isVisible] = useInView({
    threshold: 0.5,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])


	const data = [
		{ q: 'Which wallets are supported for minting and will I be able to mint on mobile?', a: 'We will support Phantom, Solflare, and Sollet wallets. If you want to mint on mobile we recommend Sollet as it is the only wallet on this list that allows minting through mobile.' },
		{ q: 'Where can I read more about the tokenomics within the Borgverse and the applications of $BOLT coin?', a: 'We will be releasing a whitepaper shortly that will go in depth on the $BOLT coin and its utility both within and outside of the Borgverse.' },
		{ q: 'When do Botborgs release, what is the mint price, and what is the wallet Limit?', a: 'There will be a total of 10,000 Botborgs in the Borgverse. The official release day has not been announced yet. The official mint price has not been finalized. There will be no wallet limit, however it will be 1 per transaction with unlimited transaction.' },
		{ q: 'Where and when will I be able to check the rarity of my Botborg?', a: 'We will be creating a rarity checker ourselves which will be displayed on the official Botborgs website.' },
		{ q: 'How can I prevent myself from falling for common scams in the NFT ecosystem?', a: 'To protect yourself from scams we STRONGLY recommend using burner wallets for mints. We also strongly recommend turning off auto-approve for all websites your wallet is connected to, even if they are trusted. Also, this should be a no brainer but NEVER click any links sent to you through DMs or posted in the chat by non-moderators/admins of the discord.' },
		{ q: 'What are the secondary sale royalties?', a: 'Royalties are set at 5%. A percent of these royalties will be deposited into the Borgverse community fund. ALL Botborg ecosystem collections will be contributing directly to this pool of funds which will be used to provide added benefits and rewards to holders.' },
	]

	return (
		<BackG ref={ref}>
			<Root>
				<p className="textHeader" style={{paddingBottom:0}}>FAQ</p>
				<p className="textSubHeader">frequently asked questions</p>
				<Body transitionDuration={2000} delay={200} visible={view}>
					{
						data.map((d, i) => (
							<FaqAccordion ques={d.q} ans={d.a} i={i} key={i} in={i === data.length-1 && "in"} />
						))
					}
				</Body>
			</Root>
			<Team />
		</BackG>
	)
}