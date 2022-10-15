import { Socket } from 'socket.io-client'

export interface Props {
	socket: Socket
}

export interface MessageProps {
	mine: boolean
}

export interface IMessage {
	sender: string
	message: string
	id: string
}

export type IMessages = IMessage[]
