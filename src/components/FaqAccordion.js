import React from 'react'
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typewriter from 'typewriter-effect';

const Root = styled('div')`
	padding: 1rem 2rem;
	& .Typewriter__wrapper {
		color: rgb(250, 178, 234);
	}
`;

const Acc = styled(Accordion)`
	border-radius: 0!important;
	background-color: transparent!important;
	box-shadow: none!important;
	padding-bottom: .5rem;
	border-bottom: 1px solid rgba(255,255,255,.25);
	& .MuiAccordionSummary-root {
		padding: 0;
	}
	& .Mui-expanded.MuiAccordionSummary-content {
		margin: 12px 0!important;
	}
	& .MuiAccordionDetails-root {
		padding-left: 0!important;
	}
	& .Mui-expanded .expand {
		&:before {
			opacity: 0;
			transition: .25s;
		}
	}
	@media (max-width: 760px) {
		& h5 {
			font-size: 16px;
		}
	}
`;

const ExpandIcon = styled('div')`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	position: relative;
	&:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 4px;
		top: 6px;
		left: 18px;
		botom: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ea02ea;
	}
	&:after {
		position: absolute;
		content: '';
		height: 4px;
		width: 26px;
		top: 17px;
		left: 7px;
		botom: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ea02ea;
		opacity: 1;
	}
	@media (max-width: 760px) {
		transform: scale(.75);
	}
`;

export default function FaqAccordion(props) {

	const [show, setShow] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = () => {
  	setShow(!show);
  };

 const { ans, ques, i } = props;

	return (
		<Root>
      <Acc style={props.in ? {borderBottom: 0} : {}} className="accordion" expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
        <AccordionSummary expandIcon={<ExpandIcon className="expand" />} onClick={handleClick} aria-controls="panel2bh-content" id="panel2bh-header">
        	<Typography variant='h5' sx={{paddingRight: '7.5%', margin: 0, color: 'white'}} className="font-coven">{ques}</Typography>
				</AccordionSummary>
				{
					show &&
					<AccordionDetails className="hidden">
	          <Typewriter
	            onInit={(typewriter) => { typewriter.typeString(ans).pauseFor(2).start() }}
	            options={{ delay: 10, cursor: '' }}
	          />
					</AccordionDetails>
				}
			</Acc>
		</Root>
	)
}