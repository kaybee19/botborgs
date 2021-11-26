import React from 'react'
import styled from 'styled-components';
import { panel1, panel2 } from '../assets/images'

const Root = styled('div')`
	padding: 5rem 0 0;
	margin: auto;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& img {
		&:first-of-type {
			margin-top: -100px;
		}
		height: fit-content;
	}
`;

const BackG = styled('div')`
	background: linear-gradient(180deg, #4D3A8A 10.94%, #322459 44.27%, #0B0514 91.67%);
	padding-bottom: 4rem;
`;

const Enter = styled('div')`
	position: relative;
	height: 96px;
	width: 100%;
	display: flex;
	background: linear-gradient(90deg, #0B0514 9.38%, #5F4DAA 52.08%, #0B0514 86.98%);
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
`;

export default class Hero extends React.Component {
	render() {
		return (
			<div>
				<Enter>
					<Text className="font-space">Enter The Borgverse</Text>
				</Enter>
				<BackG>
					<Root>
						<img src={panel1} alt="panel left" width="650" />
						<img src={panel2} alt="panel right" width="650" />
					</Root>
				</BackG>
			</div>
		)
	}
}