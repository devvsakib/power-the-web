import { FC, useState } from 'react'

// eslint-disable-next-line import/no-named-as-default
import io from 'socket.io-client'

import { Button, Container, InnerContainer, Input } from './AppStyles'

const App: FC = () => {
	const [Username, SetUsername] = useState('')

	const Connect = () => {
		if (Username.length < 3) return alert('Username minimum length is 3')

		const connection = io('ws://localhost:8080', {
			query: {
				username: Username,
			},
		})

		console.log({ connection })
	}

	return (
		<Container>
			<InnerContainer>
				<Input
					placeholder='Username'
					onChange={event => SetUsername(event.target.value)}
					value={Username}
				/>
				<Button onClick={Connect}>Join</Button>
			</InnerContainer>
		</Container>
	)
}

export default App
