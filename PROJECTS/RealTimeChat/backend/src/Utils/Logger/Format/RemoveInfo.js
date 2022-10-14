import winston from 'winston'

const RemoveInfo = winston.format(info => {
	return info.level !== 'info' ? info : false
})

export default RemoveInfo
