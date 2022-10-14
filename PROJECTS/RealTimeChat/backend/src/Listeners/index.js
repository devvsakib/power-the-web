import { AddUser } from '../Services/Users'

import RoomMessageSendListener from './RoomMessageSend'

const MainListener = socket => {
	const { username } = socket.handshake.query

	AddUser(socket.id, username)

	socket.on('message:send', (...args) =>
		RoomMessageSendListener(socket, ...args)
	)
}

export default MainListener
