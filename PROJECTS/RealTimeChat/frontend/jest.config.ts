import type { Config } from 'jest'

import { relativeAlias } from './vite.config'

const moduleNameMapper: Record<string, string> = Object.entries(
	relativeAlias
).reduce((acc: Record<string, string>, [key, path]: [string, string]) => {
	acc[`${key}/(.*)`] = `<rootDir>/${path.slice(2)}/$1`

	return acc
}, {})

const config: Config = {
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['/node_modules/'],
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	clearMocks: true,
	moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
	moduleNameMapper: moduleNameMapper,
}

export default config
