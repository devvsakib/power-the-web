import RemoveError from '../RemoveError'

describe('Logger format remove error', () => {
	it.each([
		{ level: 'error', expected: false },
		{ level: 'warn', expected: true },
		{ level: 'info', expected: true },
		{ level: 'http', expected: true },
	])('Should return $expected if level is $level', ({ level, expected }) => {
		expect.assertions(1)

		const info = {
			message: 'test',
			level,
			[Symbol('level')]: level,
			[Symbol('message')]: `{"level":"${level}","message":"test"}`,
		}

		const result = RemoveError().transform(info)

		expect(!!result).toBe(expected)
	})
})
