module.exports = {
    "transform": {
      "^.+\\.ts?$": "ts-jest"
    },
    'globals': {
      'ts-jest': {
        'diagnostics': {
          'warnOnly': true
        }
      }
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$",
    "moduleFileExtensions": [
      "ts",
      "js",
      "node"
    ],
    "moduleNameMapper": {
      '^html-whitespace-sensitive-tag-names$':
      '<rootDir>/__tests__/html-whitespace-sensitive-tag-names.json'
    },
    "collectCoverage": false,
    "testEnvironment": "node",
  }