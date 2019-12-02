import styled from 'styled-components';

export default styled.img`
	display: block;
	src: url(${(props)=> props.src ? props.src : null});
	width: ${(props) => (props.width ? props.width : 'auto')};
	margin-left: ${(props) => (props.marginleft ? props.marginleft : 'auto')};
	margin-right: ${(props) => (props.marginright ? props.marginright : 'auto')};
	padding-top: 10px;
`;
