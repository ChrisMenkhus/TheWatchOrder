import styled from 'styled-components';

import { Background, Primary } from './Colors.js'

export default styled.div`
	display: ${(props) => (props.display ? props.display : 'flex')};
	position: ${props => (props.position ? props.position : 'relative')};
	width: ${(props) => (props.width ? props.width : '100%')};
	height: ${(props) => (props.height ? props.height : '40px')}
	left: ${(props) => (props.left ? props.left : '0')};
	top: ${(props) => (props.top ? props.top : '0')};
	background-color: ${(props) => (props.background ? props.background : '#222')};
	flex-flow: row-wrap;
	box-shadow: 0px 0px 20px 0px rgba(200,200,200,0.2);


	//height: ${props => (props.top ? '0px' : 'auto')};
	//padding: 0px 1rem 3px 1rem;
	//border-bottom: ${props => (props.top ? '1px solid' : '0px')};
	//border-color: ${Primary};
	justify-content: center;
	font-family: 'Bebas Neue', cursive;
	z-index: 3;
	//background-color: ${Background};

	transition: all 0.5s;
	
	@media only screen and (max-width: 780px) {
		
	}


`;
