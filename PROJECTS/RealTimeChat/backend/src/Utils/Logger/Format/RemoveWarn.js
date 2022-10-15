import winston from 'winston'

const RemoveWarn = winston.format(info => {
	return info.level !== 'warn' ? info : false
})

export default RemoveWarn
