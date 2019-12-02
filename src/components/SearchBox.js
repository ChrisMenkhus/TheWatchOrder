import styled from 'styled-components';
import React from 'react';
import Input from './Input.js'

const Styles = styled.div`
	width: 100vw;
	margin-left: auto;
	margin-right: auto;
	padding: 0;
`;

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<Styles className='pa4'>
			<Input 
			className='pa3 ba b--black-20'
			type='search' 
			placeholder='search movies, characters, dates, and phases'
			onChange={searchChange}
			/>
		</Styles>
	)
}



export default SearchBox;