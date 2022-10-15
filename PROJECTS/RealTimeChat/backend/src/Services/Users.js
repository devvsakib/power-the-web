import Logger from '../Utils/Logger/Logger'

const users = []

export const AddUser = (id, username) => {
	users.push({ id, username })

	Logger.info('New user added', { id, username })

	return true
}

export const GetUsers = () => users
