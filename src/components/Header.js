import React from 'react'
import styled from 'styled-components';
import { Primary } from './Colors'

const Style = styled.div`
	font-weight: bold;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	padding: 8px 20px 8px 20px;
	background-color: ;
	color: white;
	//border: 2px solid ${Primary};
	//border-radius: 4px;


	background-color: ${(props) => {
		if (props.background) {
			return 'rgba(0,0,0,0.2)'
		}}};

	box-shadow: ${(props) => {
		if (props.background) {
			return '0px 10px 10px -6px rgba(0,0,0,0.55)'
		}}}; 

	width: ${(props) => {
  		      if (props.width)
			if (props.width.replace(/\D/g, '') > 0) {
  			let x = props.width;
  			return x;
  		}	
  	}};

  	//width: 100%;


`;

function Header(props) {
	return (
		<Style width={props.width}>
			
			{props.children}


		</Style>
	)
}

export default Header;