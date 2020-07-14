/**
* feature：新功能
* update：更新某功能
* fixbug：修补某功能的bug
* refactor：重构某个功能
* optimize: 优化构建工具或运行时性能
* style：仅样式改动
* docs：仅文档新增/改动
* chore：构建过程或辅助工具的变动
*/
module.exports = {
  "trailingComma": "all",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true,
  "endOfLine": "lf",
  "printWidth": 120,
  "overrides": [
    {
      "files": ["*.md", "*.json", "*.yml", "*.yaml"],
      "options": {
        "tabWidth": 2
      }
    }
  ]

}
