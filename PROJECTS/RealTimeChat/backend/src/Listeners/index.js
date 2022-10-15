import { AddUser, GetUsers } from '../Services/Users'
import { GetMessages } from '../Services/Messages'

import RoomMessageSendListener from './RoomMessageSend'

const MainListener = socket => {
	const { username } = socket.handshake.query

	socket.broadcast.emit('users:new', { id: socket.id, username })

	socket.emit('message:history', GetMessages())
	socket.emit('users:history', GetUsers())

	AddUser(socket.id, username)

	socket.on('message:send', (...args) =>
		RoomMessageSendListener(socket, ...args)
	)

	socket.on('disconnect', () => {
		socket.broadcast.emit('users:disconnect', { id: socket.id })
	})
}

export default MainListener
