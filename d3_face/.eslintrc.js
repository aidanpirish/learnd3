module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules:  {
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'class-methods-use-this': 0,
  }
};
