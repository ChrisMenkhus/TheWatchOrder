import React from 'react'
import styled from 'styled-components';

const Style = styled.h1`
	display: block;
	font-size: ${props => (props.big ? '2rem' : '1.2rem')};
	font-weight: bold;
	text-align: center;
	border-bottom: ${props => (props.borderbottom ? '1px solid' : 'none' )};
	border-color: ${props => (props.bordercolor ? props.bordercolor : 'none' )};
	width: auto;
	height: auto;
	padding-bottom: 0px; margin-bottom: 0px;
	padding: ${(props) => (props.padding ? props.padding : '0px')}
`;

function H1(props) {
	return (
		<Style big={props.big} padding={props.padding} borderbottom={props.borderbottom} bordercolor={props.bordercolor}>
			{props.children}
		</Style>
	)
}

export default H1;