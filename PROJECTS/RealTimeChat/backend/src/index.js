import 'dotenv/config'

import App from './App'

import Logger from './Utils/Logger/Logger'

const PORT = process.env.PORT || 8080

App.listen(PORT, () =>
	Logger.info(`Server running`, { port: PORT, pid: process.pid })
)
