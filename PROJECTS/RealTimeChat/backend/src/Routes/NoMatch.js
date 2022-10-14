import express from 'express'

const Router = express.Router()

Router.all('*', (req, res) => {
	return res.status(404).json({
		errors: ['Not found'],
		data: {},
	})
})

export default Router
