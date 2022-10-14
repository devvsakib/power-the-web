import RemoveHttp from '../RemoveHttp'

describe('Logger format remove http', () => {
	it.each([
		{ level: 'error', expected: true },
		{ level: 'warn', expected: true },
		{ level: 'info', expected: true },
		{ level: 'http', expected: false },
	])('Should return $expected if level is $level', ({ level, expected }) => {
		expect.assertions(1)

		const info = {
			message: 'test',
			level,
			[Symbol('level')]: level,
			[Symbol('message')]: `{"level":"${level}","message":"test"}`,
		}

		const result = RemoveHttp().transform(info)

		expect(!!result).toBe(expected)
	})
})
