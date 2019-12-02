import styled from 'styled-components';

export default styled.ul`
  	width: auto;
	list-style-type: none;
	
	@media only screen and (max-width: 780px) {
		
	}

	display: ${(props) => (props.display ? props.display : 'flex')};


	flex-direction: column;
	padding: 0px; margin: 0px;
  	justify-content: ${props => {
	  		switch(props.justify) {
	  			case 'right':
	  				return 'flex-end';
	  			case 'left':
	  				return 'flex-start';
	  			case 'center':
	  				return 'center';  				
	  			case 'space-around':
	  				return 'space-around';  
	  			default: return 'left';
	  		}
  	}};
  	padding: ${props => {
	  		switch(props.justify) {
	  			case 'right':
	  				return '0px 20px';
	  			case 'left':
	  				return '0px';
	  			case 'center':
	  				return '0px 8px 0px 8px';  
	  			case 'space-around':
	  				return 'space-around';  				
	  			default: 
	  		}
  	}};



`;



