import { AddUser } from '../Services/Users'

const MainListener = socket => {
	const { username } = socket.handshake.query

	AddUser(socket.id, username)
}

export default MainListener
