import styled from 'styled-components';
import { Primary, PrimaryHighlight } from './Colors.js'

export default styled.button`
	background-color: ${props => props.color ? props.color : Primary };
	position: ${(props) => (props.position ? props.position : 'relative')};
	//background-color: ${Primary};
	text-align: center;
	//white-space: nowrap;
	border: 0px;
	transition: all 0.1s;

	margin-top: 1rem;
	
	z-index: 500;
	width: auto;


	//border: 2px solid ${Primary};
	border-radius: 2px;
	box-shadow: 0px 10px 10px -6px rgba(0,0,0,0.55);

	&, a {
		color: #FFFFFF;
	}

	&:hover {
		transform: scale(1.1);
		color: white;
		//background-color: ${PrimaryHighlight}
		a { color: white;}
	}

	&:focus {		
		outline: 0;
	}

`;

