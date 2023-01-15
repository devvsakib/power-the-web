import RemoveWarn from '../RemoveWarn'

describe('Logger format remove warn', () => {
	it.each([
		{ level: 'error', expected: true },
		{ level: 'warn', expected: false },
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

		const result = RemoveWarn().transform(info)

		expect(!!result).toBe(expected)
	})
})
