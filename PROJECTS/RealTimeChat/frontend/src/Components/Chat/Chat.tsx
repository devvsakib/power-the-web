import { FC, useEffect, useState } from 'react'

import type { Props, IMessages } from './Types'

import {
	Container,
	Users,
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

const Chat: FC<Props> = ({ socket }) => {
	const [Text, SetText] = useState('')
	const [Messages, SetMessages] = useState<IMessages>([])

	useEffect(() => {
		socket.once('message:history', (messages: IMessages) => {
			SetMessages(messages)
		})

		return () => {
			socket.off()
		}
	}, [socket])

	return (
		<Container>
			<Users>
				<h3>Users</h3>
				<User>A</User>
				<User>B</User>
				<User>C</User>
			</Users>
			<ChatBox>
				<MessagesStyled>
					{Messages.map(({ sender, message, id }) => (
						<Message mine={sender === socket.id} key={id}>
							<MessageWrapper>
								<MessageSender>{sender}</MessageSender>
								<MessageText>{message}</MessageText>
							</MessageWrapper>
						</Message>
					))}
				</MessagesStyled>
				<InputContainer>
					<Input
						placeholder='text'
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
