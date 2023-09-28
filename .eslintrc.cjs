module.exports = {
    root: true,
    env: { browser: true, es2020: true, "node": true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: {
        react: { version: '18.2' },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'no-unused-vars': 'warn',
        'react/prop-types': 'warn',
        'react/prop-types': 'off',
        'no-unsafe-optional-chaining': 'warn',
        'react/display-name': 'off'
    },
}