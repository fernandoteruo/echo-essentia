module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'array-bracket-spacing': 'error',
    'object-curly-spacing': 'error',
  },
};
