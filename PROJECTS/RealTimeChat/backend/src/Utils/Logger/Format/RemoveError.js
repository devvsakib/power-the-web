import winston from 'winston'

const RemoveError = winston.format(info => {
	return info.level !== 'error' ? info : false
})

export default RemoveError
