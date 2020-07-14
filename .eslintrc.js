module.exports = {
    // @typescript-eslint/parser：ESLint的解析器，用于解析Typescript文件，从而检查和规范Typescript代码
    // @typescript-eslint/eslint-plugin：这是一个ESLint插件，包含了各类定义好的检测Typescript代码的规范
    // eslint-config-prettier：解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效
    // eslint-plugin-prettier：将prettier作为ESLint规范来使用
    // prettier/@typescript-eslint：使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范。
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
    },
}
