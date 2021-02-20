module.exports = {
  moduleNameMapper: {
    "\\.(css|scss)$": 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/../../tsconfig.json',
    },
  },
  collectCoverageFrom: [
    '<rootDir>/../../src/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/types.ts',
    '!src/index.tsx',
    '!src/**/reportWebVitals.ts'
  ],
  testMatch: [
    '<rootDir>/**/*.spec.ts?(x)'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: [
    'lcov',
    'text'
  ],
  moduleFileExtensions: ['json', 'ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.tsx?$': require.resolve('ts-jest'),
  }
}
