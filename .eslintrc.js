module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:import/errors', 'plugin:import/warnings'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
    'cypress/globals': true
  },
  plugins: ['svelte3', 'cypress'],
  overrides: [
    {
      files: '*.svelte',
      processor: 'svelte3/svelte3'
    }
  ]
}
