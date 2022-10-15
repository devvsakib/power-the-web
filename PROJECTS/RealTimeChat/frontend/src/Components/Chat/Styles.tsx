import styled, { css } from 'styled-components'

import type { MessageProps, UserProps } from './Types'

export const Container = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: row;
`

export const Users = styled.div`
	height: 100vh;
	width: 20%;

	border-right: 1px solid black;

	display: flex;
	flex-direction: column;

	align-items: center;

	&:first-child {
		margin-bottom: 10px;
	}
`

export const User = styled.div<UserProps>`
	border: 1px solid black;
	padding: 10px 20px;
	width: 100%;
	border-right: none;

	&:not(:last-child) {
		border-bottom: none;
	}

	${({ me }) =>
		me
			? css`
					background-color: #00ff00;
			  `
			: css`
					background-color: #e6e6e6;
			  `}
`

export const ChatBox = styled.div`
	width: 80%;
	height: 100%;
`

export const MessagesStyled = styled.div`
	height: 90%;
	width: 100%;

	gap: 10px;

	padding: 10px;

	display: flex;
	flex-direction: column;

	overflow-y: scroll;

	scrollbar-width: thin;
	scrollbar-color: #888888 #f1f1f1;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	&::-webkit-scrollbar-thumb {
		background: #888888;
	}
`

export const MessageSender = styled.p`
	font-size: 12px;
`

export const MessageText = styled.p``

export const MessageWrapper = styled.div`
	width: fit-content;

	padding: 10px 20px;

	border-radius: 10px;
`

export const Message = styled.div<Partial<MessageProps>>`
	display: flex;

	padding: 10px 20px;

	${({ mine }) =>
		mine
			? css`
					justify-content: flex-end;
			  `
			: css`
					justify-self: flex-start;
			  `};

	& ${MessageWrapper} {
		${({ mine }) =>
			mine
				? css`
						background-color: #00ff00;
				  `
				: css`
						background-color: #e6e6e6;
				  `};
	}
`

export const InputContainer = styled.div`
	height: 10%;
	width: 100%;

	padding: 10px 20px;

	background-color: #d6d6d6;

	display: flex;
	justify-content: space-around;
	align-items: center;
`

export const Button = styled.button`
	background-color: #00ff00;
	border-radius: 10px;
	border: none;
	padding: 10px 20px;

	cursor: pointer;
`

export const Input = styled.input`
	height: 90%;
	width: 90%;

	padding: 10px 20px;

	border: none;
	border-radius: 10px;
`
