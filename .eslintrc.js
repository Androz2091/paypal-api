module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        indent: ['error', 4],
        'quote-props': ['error', 'as-needed'],
        camelcase: 0,
        '@typescript-eslint/semi': 'never'
    }
}
