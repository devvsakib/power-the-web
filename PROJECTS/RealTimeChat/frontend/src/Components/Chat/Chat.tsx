import { FC } from 'react'

import type { Props } from './Types'

import {
	Container,
	Users,
	User,
	ChatBox,
	Messages,
	Message,
	Input,
	InputContainer,
	Button,
	MessageText,
	MessageSender,
	MessageWrapper,
} from './Styles'

const Chat: FC<Props> = ({ socket }) => {
	return (
		<Container>
			<Users>
				<h3>Users</h3>
				<User>A</User>
				<User>B</User>
				<User>C</User>
			</Users>
			<ChatBox>
				<Messages>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
					<Message mine>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello1</MessageText>
						</MessageWrapper>
					</Message>
					<Message>
						<MessageWrapper>
							<MessageSender>A</MessageSender>
							<MessageText>Hello2</MessageText>
						</MessageWrapper>
					</Message>
				</Messages>
				<InputContainer>
					<Input />
					<Button>Send</Button>
				</InputContainer>
			</ChatBox>
		</Container>
	)
}

export default Chat
