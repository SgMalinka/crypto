import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        ignores: ['node_modules', 'dist', 'build', '.next'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                React: true,
                document: true,
                window: true,
                process: true,
                console: true,
                localStorage: true,
                fetch: true,
                URL: true,
                HTMLSelectElement: true,
                HTMLInputElement: true,
                HTMLTextAreaElement: true,
                setTimeout: true,
                HTMLDivElement: true,
                Node: true,
                MouseEvent: true,
                jest: true,
                it: true,
                expect: true,
                describe: true,
                beforeEach: true,
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
        },
        rules: {
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'no-undef': 'error',
        },
    },
    {
        files: ['**/enum/*.ts'],
        rules: {
            'no-unused-vars': 'off',
        },
    },
];
