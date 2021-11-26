import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/*----------------------------
	xs: 0px
	sm: 600px
	md: 900px
	lg: 1200px
	xl: 1536px
----------------------------*/

/*----------------------------
	Global styles
----------------------------*/

	/*-- Body --*/

	.container {
		padding: 2.5% 12%;
	}
	.linkClass {
		text-decoration: none;
		color: white;
	}

	/*-- Fonts --*/

	.font-robot {
		font-family: 'Robotika'!important;
	}
	.font-space {
		font-family: 'SpaceQuest'!important;
	}
	.font-coven {
		font-family: 'Coven'!important;
	}
	.textColor {
		color: #6E6699;
	}
	.textHeader {
		font-family: 'SpaceQuest'!important;
		font-style: normal;
		font-size: 48px;
		line-height: 57px;
		text-transform: uppercase;
		color: #EA00EA;
		-webkit-text-stroke: 1px black;
		margin: 0rem;
		padding: 2.5rem 0;
	}
	.textSubHeader {
		font-family: 'Robotika'!important;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 29px;
		text-transform: uppercase;
	}
	.textSub {
		margin: 0 0 .25rem;
		font-family: 'Coven'!important;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 150%;
		color: #000000;
		-webkit-text-stroke: 1px #EA00EA;
	}

`;

export default GlobalStyle;