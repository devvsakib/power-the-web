import { AddUser } from '../Services/Users'

import RoomMessageSendListener from './RoomMessageSend'

const MainListener = socket => {
	const { username } = socket.handshake.query

	socket.broadcast.emit('users:new', { id: socket.id, username })

	AddUser(socket.id, username)

	socket.on('message:send', (...args) =>
		RoomMessageSendListener(socket, ...args)
	)

	socket.on('disconnect', () => {
		socket.broadcast.emit('users:disconnect', { id: socket.id })
	})
}

export default MainListener
