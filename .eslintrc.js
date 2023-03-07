module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 8,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb-base',
        'plugin:prettier/recommended', // 避免prettier规则与eslint冲突,冲突使用prettier规则, prettier需要放置在最后
        'prettier/react', // 避免vue 与 prettier冲突
    ],
    rules: {
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }], // 允许使用短路、三目
        'func-names': ['error', 'as-needed'], // 需要时添加函数名称
        'no-param-reassign': ['error', { props: false }], // 函数形参可修改
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: 'React', // Pragma to use, default to "React"
            fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // It will default to "latest" and warn if missing, and to "detect" in the future
            flowVersion: '0.53', // Flow version
        },
        propWrapperFunctions: [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            'forbidExtraProps',
            { property: 'freeze', object: 'Object' },
            { property: 'myFavoriteWrapper' },
            // for rules that check exact prop wrappers
            { property: 'forbidExtraProps', exact: true },
        ],
        componentWrapperFunctions: [
            // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
            'observer', // `property`
            { property: 'styled' }, // `object` is optional
            { property: 'observer', object: 'Mobx' },
            { property: 'observer', object: '<pragma>' }, // sets `object` to whatever value `settings.react.pragma` is set to
        ],
        formComponents: [
            // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
            'CustomForm',
            { name: 'Form', formAttribute: 'endpoint' },
        ],
        linkComponents: [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            'Hyperlink',
            { name: 'Link', linkAttribute: 'to' },
        ],
    },
    globals: {},
};
