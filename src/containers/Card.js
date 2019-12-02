import React from 'react';
import styled from 'styled-components';
import card from '../assets/card.png'
import card3 from '../assets/card_iron2.png'
import {H1, SmallContainer } from '../components'

import logos from '../assets/logos.js'

const Style = styled.div`
	background-image: url(${(props)=> props.logo ? props.logo : null});
	background-color: transparent;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;	
	position: relative;
	width: 360px;
	height: 160px;
	margin: 8px 0;
	transition: all 0.5s;
	//box-shadow: 0px 0px 10px -2px rgba(200,200,200,0.2);
	//border-bottom: 1px solid white;

	& .date {
		margin-top: 160px;
		font-size: 0.8rem;
		margin-right: 10px;
		margin-left: auto;
	}

	//not work
	&:nth-of-type(1) {
		margin-top: 500px;
	}

	&:nth-child(odd) {
		align-self: flex-end;
		margin-top: 0px; //any margin top negative breaks shit

		.date {			
			margin-right: auto;
			margin-left: 10px;
		}
	}

	img {
		
	}

	&:hover {
		box-shadow: 0px 0px 10px -2px rgba(255,255,255,0.5);

	}




	@media only screen and (max-width: 780px) {
	 	&:nth-child(odd) {
		align-self: center;

		.date {
				margin-top: -5px;
				margin-left: auto;
				margin-right: 15px;
			}
		}

		&:nth-child(even) {
		align-self: center;


		.date {
				margin-top: -5px;
				margin-left: auto;
				margin-right: 15px;
			}
		}
	}

`;

class Card extends React.Component {
	render() {
	return(			
		<Style logo={this.props.logo}>
			<SmallContainer marginright='auto' marginleft='auto'>
				{/*<H1 className='title'>{this.props.name}</H1>*/}
			</SmallContainer>
			
			

			<SmallContainer className='date'>
				<p>{this.props.release}</p>
			</SmallContainer>
		</Style>
	)
	}
}

export default Card;
