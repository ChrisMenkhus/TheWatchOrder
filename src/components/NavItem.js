import styled from 'styled-components';

const list = styled.li`
	display: inline-block;
	//margin-left: 20px;
	text-align: center;
	//padding: 0px 5px 0px 5px;
	color: gray;
	
	transition: all 0.1s;

	font-size: 0.9rem;

	text-decoration: none;

	width: auto;

	padding-top: 10px;



	&:hover {
		
		cursor: pointer;
		transform: scale(1.15);

		a { color: white }
	}

	a {
		color: #aaa;
			text-decoration: none;
	}

	&, button {
		background: none;
		border: none;
	}



`;

const newList = list.withComponent('a');


export default newList;