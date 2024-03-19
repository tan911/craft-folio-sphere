/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ['@repo/eslint-config/next.js'],
    parser: '@typescript-eslint/parser',
    rules: {
        'no-unused-vars': 'off',
    },
    parserOptions: {
        project: './packages/ui/tsconfig.lint.json',
        // project: './tsconfig.lint.json',
        // project: true,
    },
}
