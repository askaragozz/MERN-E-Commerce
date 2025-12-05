// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';
import promisePlugin from 'eslint-plugin-promise';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        ignores: [
            'dist',
            'coverage',
            'node_modules',
            '*.log',
            'tmp',
            '.husky',
            '.vscode',
            'eslint.config.mjs',
        ],
    },

    js.configs.recommended,
    ...tseslint.configs.recommended, // no parserOptions.project here

    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            import: importPlugin,
            n: nPlugin,
            promise: promisePlugin,
            'unused-imports': unusedImports,
        },
        settings: {
            'import/resolver': { typescript: true },
        },
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            'unused-imports/no-unused-imports': 'error',
            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type',
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'n/no-missing-import': 'off',
            'n/no-unsupported-features/es-syntax': 'off',
            'promise/no-multiple-resolved': 'error',
        },
    },

    // Turn off rules clashing with Prettier
    eslintConfigPrettier,
];
