import { FC } from 'react'

import { Button, Container, InnerContainer, Input } from './AppStyles'

const App: FC = () => {
	return (
		<Container>
			<InnerContainer>
				<Input placeholder='Username' />
				<Button>Join</Button>
			</InnerContainer>
		</Container>
	)
}

export default App
