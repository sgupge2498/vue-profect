/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node": true
  },
}

