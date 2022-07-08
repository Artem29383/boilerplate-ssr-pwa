module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  rules: {
    'string-quotes': 'single',
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,
    'value-list-comma-newline-after': null,
    'no-extra-semicolons': null,
    'indentation': null,
    'selector-max-empty-lines': null,
    'no-missing-end-of-source-newline': null,
    'value-keyword-case': null,
    'function-name-case': null,
    'function-whitespace-after': null,
    'rule-empty-line-before': null,
    'function-comma-space-after': null,
    'selector-pseudo-element-colon-notation': null,
    'no-duplicate-selectors': null,
    'color-hex-case': null,
    'declaration-block-trailing-semicolon': null,
    'no-eol-whitespace': [ true, {
      "ignore": ["empty-lines"]
    } ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',
          'local'
        ]
      }
    ]
  }
}