import React from 'react'
import styled from 'styled-components';

const Style = styled.div`
	margin: 0;
	scroll-snap-type: x mandatory;
	overflow-x: scroll;

	display: grid;
	grid-template-columns: repeat(5, 100%);

	section {
		scroll-snap-align: center;
		padding: 7em;
		height: calc(100vh - 8em);
		width: calc(100% - 14em);
		margin-right: auto;
		margin-left: auto;

		&:nth-of-type(1) {
			background-color: #333;
		}
		&:nth-of-type(2) {
			background-color: red;
		}
		&:nth-of-type(3) {
			background-color: orange;
		}
		&:nth-of-type(4) {
			background-color: yellow;
		}
		&:nth-of-type(5) {
			background-color: green;
		}
	};

	::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
	

		
`;

function ParallaxBackground(props) {
	return(
		<Style>{props.children}</Style>
		)
}

export default ParallaxBackground;