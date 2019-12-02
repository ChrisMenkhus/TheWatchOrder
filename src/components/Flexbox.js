import React from 'react'
import styled from 'styled-components';

const Style = styled.div`
	
	display: flex;
	flex-wrap: wrap;
	flex-direction: ${(props) => {
		if (props.flexdirection) {
  			let x = props.flexdirection;
  			console.log(x);
  			return x;
  		}	
  	}
  	};
	justify-content: center;
	align-items: center;

	margin: 10px;

	width: ${(props) => {
      if (props.width)
			if (props.width.replace(/\D/g, '') > 0) {
  			let x = props.width;
  			return x;
  		}	
  	}
  	};

  	height: ${(props) => {
      if (props.height)
      if (props.height.replace(/\D/g, '') > 0) {
        let x = props.height;
        return x;
    	} 
   	}
  	};

  background-color: ${(props) => {
    if (props.background) {
      return props.background;
    } 
    else return null;
  }};

`;

function Flexbox(props) {
	return(
		<Style width={props.width} height={props.height} background={props.background} flexdirection={props.flexdirection} >{props.children}{console.log(props.flexdirection)}</Style>
		)
}

export default Flexbox;