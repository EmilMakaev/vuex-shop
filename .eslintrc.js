module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-self-closing': false,
    'vue/max-attributes-per-line': false,
    'vue/singleline-html-element-content-newline': false,
    'vue/html-closing-bracket-newline': false,
    'vue/multiline-html-element-content-newline': false,
    'vue/html-indent': false,
    'vue/attribute-hyphenation': false,
    'vue/require-default-prop': false,
    "eol-last": 0,
    "space-before-function-paren": 0,
    "vue/require-v-for-key": false,
    "vue/return-in-computed-property": false,
    'generator-star-spacing': 'off',
    'no-unused-vars': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}