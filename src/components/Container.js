import styled from 'styled-components';
import {Background, Primary, Border} from './Colors.js'
import bgimg from '../assets/bgimg.jpg'

export default styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	padding-right: 15px;

  border-color: ${Border};

  	padding-left: 15px;
  	padding-bottom: 15px;
  	margin: 0 auto;
  	//background-color: ${Background};
  	//border: 1px solid ${Primary};



  	white-space: pre-line;

  	border: ${props => (
  			props.border ? '1px solid' : '0px'
  		)};

  	background-image: url(${props => (
  			props.background ?  bgimg : ''
  		)});

  	background-size: cover;

  	@media (min-width: 768px) {
    	width: 750px;
	}
	@media (min-width: 992px) {
	    width: 970px;
	}
	@media (min-width: 1200px) {
	    width: 1170px;
	}
`;