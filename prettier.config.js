module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',

  semi: false,
  arrowParens: 'always',
  singleQuote: true,
  endOfLine: 'auto',
  printWidth: 80,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'strict',
}
