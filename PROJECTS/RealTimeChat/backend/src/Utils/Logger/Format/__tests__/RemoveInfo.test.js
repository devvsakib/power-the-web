import RemoveInfo from '../RemoveInfo'

describe('Logger format remove info', () => {
	it.each([
		{ level: 'error', expected: true },
		{ level: 'warn', expected: true },
		{ level: 'info', expected: false },
		{ level: 'http', expected: true },
	])('Should return $expected if level is $level', ({ level, expected }) => {
		expect.assertions(1)

		const info = {
			message: 'test',
			level,
			[Symbol('level')]: level,
			[Symbol('message')]: `{"level":"${level}","message":"test"}`,
		}

		const result = RemoveInfo().transform(info)

		expect(!!result).toBe(expected)
	})
})
