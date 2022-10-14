const RoomMessageSend = (socket, message) => {
	socket.broadcast.emit('message:receive', message)
}

export default RoomMessageSend
