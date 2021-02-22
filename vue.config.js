module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    assetsDir: "public",
    // 打包文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    runtimeCompiler: false,
    // webpack配置
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // use thread-loader for babel & TS in production build
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    },
}