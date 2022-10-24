import Logger from '../Utils/Logger/Logger'

const FilterHeaders = headers => {
	const {
		'x-access-token': _,
		'set-cookie': __,
		cookie: ___,
		...newHeaders
	} = headers

	return newHeaders
}

const LogHttpRequest = (req, res, next) => {
	const requestStart = Date.now()

	res.on('finish', () => {
		const {
			headers,
			httpVersion,
			method,
			socket: { remoteFamily },
			url,
		} = req

		const { statusCode, statusMessage } = res
		const responseHeaders = res.getHeaders()

		Logger.http({
			processingTime: Date.now() - requestStart,
			headers: FilterHeaders(headers),
			httpVersion,
			method,
			remoteFamily,
			url,
			response: {
				statusCode,
				statusMessage,
				headers: FilterHeaders(responseHeaders),
			},
		})
	})

	next()
}

export default LogHttpRequest
