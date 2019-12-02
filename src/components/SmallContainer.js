import styled from 'styled-components';
import { Primary } from './Colors'

export default styled.div`
  display: flex;
	float: ${(props) => (props.float ? props.float : 'none')};
  //flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  align-self: flex-start;

  border: ${props => (
   props.border ? '2px solid' : '0px'
  )};

  border-color: ${Primary};

  transition: all 0.5s;

  position: ${(props) => props.position ? props.position : 'auto'};

  top: 0;

  z-index: ${(props) => props.zindex ? props.zindex : '0'};


  background-color: ${(props) => {
    if (props.background) {
      return props.background;
    } 
    else return null;
  }};

  box-shadow: ${(props) => {
    if (props.background)
    if (props.background) {
      return '0px 10px 10px -6px rgba(0,0,0,0.55);';
    } 
    else return null;
  }};

  

  width: ${(props) => {
      if (props.width) {
  			return props.width;
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

  margin-left: ${(props) => {
    if (props.marginleft) 
      return props.marginleft; else return null;
    }
    };

  margin-right: ${(props) => {
    if (props.marginright) 
    return props.marginright; else return null;
    }
    };

  margin-top: ${(props) => {
    if (props.margintop) 
    return props.margintop; else return null;
    }
    };

  margin-bottom: ${(props) => {
    if (props.marginbottom) 
    return props.marginbottom; else return null;
    }
    };



  @media only screen and (max-width: 780px) {
    
  }

`;