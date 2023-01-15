import Logger from '../Utils/Logger/Logger'

const users = []

export const AddUser = (id, username) => {
	users.push({ id, username })

	Logger.info('New user added', { id, username })

	return true
}

export const GetUsers = () => users

export const RemoveUser = id => {
	const index = users.findIndex(user => user.id === id)

	if (index < 0) return false

	users.splice(index, 1)

	return true
}
