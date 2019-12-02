import styled from 'styled-components';

export default styled.img`
	src: url(${(props)=> props.src ? props.src : null});
	max-width: 100%;
	height: 100%;
	width: 100%;
`;
