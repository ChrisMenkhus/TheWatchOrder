import React from 'react'
import styled from 'styled-components';

const Style = styled.div`
	background-image: url(${(props)=> props.src ? props.src : null});
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	height: ${(props) => props.height ? props.height : 'auto'};		
	width: ${(props) => props.width ? props.width : 'auto'};
	box-shadow: inset 0px 0px 15px 4px rgba(0,0,0,0.25);
	background-color: white;

	margin-left: auto;
	margin-right: auto;
	z-index: 1;
`;

function ParallaxBackground(props) {
	return(
		<Style width={props.width} height={props.height} src={props.src}>{props.children}</Style>
		)
}

export default ParallaxBackground;