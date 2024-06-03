import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/config/setup.ts'],
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).[tj]s?(x)'
  ],
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>/src',
    '<rootDir>/src/app',
    '<rootDir>/src/domain',
    '<rootDir>/src/infra',
    '<rootDir>/src/ui'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
