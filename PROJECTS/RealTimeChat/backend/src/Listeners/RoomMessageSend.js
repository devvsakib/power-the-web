import { v4 as uuid } from 'uuid'

import { AddMessage } from '../Services/Messages'

const RoomMessageSend = (socket, message, callback) => {
	const id = uuid()

	AddMessage(socket.id, id, message)

	callback({ id })

	socket.broadcast.emit('message:receive', { sender: socket.id, message, id })
}

export default RoomMessageSend
