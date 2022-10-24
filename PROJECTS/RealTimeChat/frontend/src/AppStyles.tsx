import styled from 'styled-components'

export const Container = styled.div`
	min-height: 100vh;
	min-width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const InnerContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	border: 3px solid black;

	min-width: 30%;
	height: 150px;

	border-radius: 15px;
`

export const Input = styled.input`
	width: 70%;
	height: 50px;

	padding: 10px 20px;

	border: 3px solid black;
	border-radius: 15px;
`

export const Button = styled.button`
	border-radius: 15px;
	border: none;

	width: 20%;
	height: 50px;

	background-color: #00aeff;

	transition: background-color 0.5s, color 0.5s;

	&:hover {
		background-color: #0000ff;
		color: white;
	}
`
