import { Socket } from 'socket.io-client'

export interface Props {
	socket: Socket
	username: string
}

export interface MessageProps {
	mine: boolean
}

export interface UserProps {
	me: boolean
}

export interface IMessage {
	sender: string
	message: string
	id: string
}

export type IMessages = IMessage[]

export interface IUser {
	id: string
	username: string
	disconected: boolean
}

export type IUsers = IUser[]
