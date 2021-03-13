module.exports = {
    roots: ['<rootDir>/src'],
    setupFiles: ['<rootDir>/setupTests.js'],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.svg$': 'jest-svg-transformer',
      '.+\\.(css|styl|less|sass|scss|ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        'jest-css-modules-transform',
    },
    // moduleNameMapper: {
    //   '^@/(.*)$': '<rootDir>/src/$1',
    // },
    // collectCoverageFrom: [
    //   '**/src/components/**/*.{js,jsx,ts,tsx}',
    // ],
    coverageThreshold: {
      global: {
        statements: 10,
        branches: 10,
        functions: 10,
        lines: 10,
      },
    },
    collectCoverage: true,
    coverageReporters: ['clover', 'html', 'lcov', 'text-summary'],
  }
  