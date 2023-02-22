import request from 'supertest'

import App from '../../App'

describe('Get user data', () => {
	afterEach(() => {
		jest.clearAllMocks()
		jest.restoreAllMocks()
		jest.resetModules()
	})

	it('Should return 404', async () => {
		expect.assertions(3)

		const res = await request(App).get('/api/404')

		expect(res.statusCode).toEqual(404)
		expect(res.body).toHaveProperty('errors')
		expect(res.body).toEqual({
			data: {},
			errors: ['Not found'],
		})
	})
})
