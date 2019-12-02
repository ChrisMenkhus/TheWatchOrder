import React from 'react'
import styled from 'styled-components';
import lines from '../assets/lines.png'

const Style = styled.div`


	display: flex;
	flex-direction: column;
	position: relative;
	width: 788px;
	margin-top: 50px;
	margin-bottom: 250px;
	margin-left: auto; margin-right: auto;
	padding-top: 0px;

		&::before {
			position: absolute;
			left: 388px;		
			top: 0;	
			margin-top: 25px;
			margin-left: auto;
			margin-right: auto;
			content:'${(props) => props.phasetext}';
			width: 10px;
			white-space: pre-line;
			line-height: 4rem;
			font-size: 1.2rem;
			font-weight: bold;
			color: #888;
			z-index: -5;
		}

		#fixed {
			position: fixed;
			width: 788px;
			top: 0;
			margin-left: auto;
			margin-right: auto;
			margin-top: 200px;
		}

		img {
			
			
		
		}

//mobile
	@media (max-width: 770px) {
		width: 100%;

		&::before {
			left: 15px;
		}

		img {
			position: fixed;
			left: 0;
		}
	}

`;

function Timeline(props) {
	return (			
		<Style phasetext={props.phasetext}>
			<div id='fixed'>
			<img src={lines} alt='timelines'></img>
			</div>
			
			{props.children}
			
		</Style>			
	)
}

export default Timeline;