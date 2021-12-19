module.exports = {
    globals: {
      _: true,
      messages: true,
      log: true,
      next: true,
      it: true,
      should: true,
      describe: true,
      before: true,
      req: true,
      response: true
    },
    env: {
      browser: true,
      es6: true,
      node: true
    },
    // extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 13,
      sourceType: 'module'
    },
    rules: {
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'no-var': ['error'],
      'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
      'no-const-assign': ['error'],
      semi: ['error', 'never'],
      indent: [2, 2],
      'prefer-const': ['error'],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'quote-props': ['error', 'as-needed'],
      'space-infix-ops': ['error', { int32Hint: true }],
      curly: [2, 'multi-line'],
      'block-spacing': ['error', 'always'],
      'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
      'spaced-comment': ['error', 'always'],
      camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
      eqeqeq: ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false }],
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
      'padded-blocks': ['error', 'always'],
      'no-trailing-spaces': ['error', { skipBlankLines: true }]
      // 'dot-notation': [2, {allowPattern: '^[a-z]+(_[a-z]+)+$'}]
    }
  };  