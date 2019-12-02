import styled from 'styled-components';

export default styled.p`
	font-size: ${props => (props.big ? '1.2rem' : '0.9rem')};
	font-weight: lighter;
	white-space: pre-line;
	text-align: center;
	padding: 1px;
	margin-top: 0px;
	line-height: 4rem;
	clear: both;
	display: block;
`;