import { FC, useEffect, useState } from 'react'

import type { Props, IMessages, IUsers } from './Types'

import {
	Container,
	Users as UsersStyled,
	User,
	ChatBox,
	MessagesStyled,
	Message,
	Input,
	InputContainer,
	Button,
	MessageText,
	MessageSender,
	MessageWrapper,
} from './Styles'

const Chat: FC<Props> = ({ socket, username }) => {
	const [Text, SetText] = useState('')
	const [Messages, SetMessages] = useState<IMessages>([])
	const [Users, SetUsers] = useState<IUsers>([])

	useEffect(() => {
		socket.once('message:history', (messages: IMessages) => {
			SetMessages(messages)
		})

		socket.once('users:history', (messages: IUsers) => {
			SetUsers([{ id: socket.id, username }, ...messages])
		})

		return () => {
			socket.off()
		}
	}, [socket, username])

	return (
		<Container>
			<UsersStyled>
				<h3>Users</h3>
				{Users.map(({ id, username }) => (
					<User me={id === socket.id} key={id}>
						{username}
					</User>
				))}
			</UsersStyled>
			<ChatBox>
				<MessagesStyled>
					{Messages.map(({ sender, message, id }) => (
						<Message mine={sender === socket.id} key={id}>
							<MessageWrapper>
								<MessageSender>
									{
										Users.find(user => user.id === sender)
											?.username
									}
								</MessageSender>
								<MessageText>{message}</MessageText>
							</MessageWrapper>
						</Message>
					))}
				</MessagesStyled>
				<InputContainer>
					<Input
						placeholder='Text'
						onChange={event => SetText(event.target.value)}
						value={Text}
					/>
					<Button>Send</Button>
				</InputContainer>
			</ChatBox>
		</Container>
	)
}

export default Chat
