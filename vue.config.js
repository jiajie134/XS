/*
 * @Author: your name
 * @Date: 2021-02-22 09:54:58
 * @LastEditTime: 2021-03-01 13:39:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\vue.config.js
 */
const path = require('path');
const mode = process.env.NODE_ENV === 'production'
module.exports = {
    // 基本路径
    publicPath: mode
    ? './'
    : '/',
    assetsDir: "assets",
    // 打包文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // use the full build with in-browser compiler?
    runtimeCompiler: false,
    // webpack配置
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
      },
    configureWebpack: () => {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // use thread-loader for babel & TS in production build
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    pwa: {},
    // pages:{
    //     index:{
    //         entry:'src/main.js'
    //     }
    // },
    pluginOptions:{
      
    },
    css:{
        requireModuleExtension:false,
        extract:mode ? true : false,
        sourceMap:false,
        loaderOptions:{
            less:{
                // data:'@import "@/assets/XSCSS/globalVar.less" '
                // import:resolve("@/assets/XSCSS/globalVar.less")
                javascriptEnabled: true
            }
        }
    },
    // webpack-dev-server 相关配置
    devServer: {
        // open: process.platform === 'darwin',
        // host: '0.0.0.0',
        // port: 8080,
        // https: false,
        // hotOnly: false,
        // proxy: null,
        // before: app => {}
    },
}

function addStyleResource (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/assets/XSCSS/globalVar.less'),
        ],
      })
  }