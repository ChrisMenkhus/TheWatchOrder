import React from 'react'
import Timeline from './Timeline.js'
import styled from 'styled-components';

const Style = styled.div`
	//margin-left: ${(props) => (props.marginleft ? props.marginleft : '0px')};
	margin-left: auto;
	margin-right: auto;
	background-color: blue;

`;

function Marvel(props) {
	return (
		<Style marginleft={props.marginleft}>
		<Timeline>
			
		</Timeline>
		</Style>
	)
}

export default Marvel;