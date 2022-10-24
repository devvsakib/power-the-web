import winston from 'winston'

const RemoveHttp = winston.format(info => {
	return info.level !== 'http' ? info : false
})

export default RemoveHttp
