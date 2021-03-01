/*
 * @Author: your name
 * @Date: 2021-02-05 09:57:26
 * @LastEditTime: 2021-03-01 13:40:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \XS\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          // 由于 customStyleName 在配置中被声明的原因，`style: true` 会被直接忽略掉，
          // 如果你需要使用 scss 源文件，把文件结尾的扩展名从 `.css` 替换成 `.scss` 就可以了
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
}