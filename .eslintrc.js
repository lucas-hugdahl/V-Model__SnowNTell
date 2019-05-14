module.exports = {
  root: true,
  env: {
    node: true,
    "browser": true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    "no-console": "warn",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-unused-vars": "warn",
    "no-trailing-spaces": "warn",
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "semi": [
      "warn",
      "always"
    ]


  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
