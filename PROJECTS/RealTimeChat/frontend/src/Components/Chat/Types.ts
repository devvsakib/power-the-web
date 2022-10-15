import { Socket } from 'socket.io-client'

export interface Props {
	socket: Socket
}

export interface MessageProps {
	mine: boolean
}
