const messages = []

export const AddMessage = (sender, id, message) => {
	messages.push({ sender, message, id })

	return true
}

export const GetMessages = () => {
	return messages
}
