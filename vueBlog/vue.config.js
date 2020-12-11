const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir);
}
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
  // 配置gzip压缩
  configureWebpack: config => {
    const plugins = [];
    if (IS_PROD) {
      plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins];
  },
  // 配置svg全局加载
  chainWebpack: config => {
    // 设置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@img", resolve("src/assets/image"))
      .set("@errorimg", resolve("src/assets/errorImg"))
      .set("public", resolve("public"))
    // 移除vue-cli内置对svg文件的处理
    const SvgIconRule = config.module.rule('svg')
    SvgIconRule.uses.clear()
    SvgIconRule
      .test(/\.svg$/)        
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()        
      .use('svg-sprite-loader')        
      .loader('svg-sprite-loader')        
      .options({          
        symbolId: 'icon-[name]'        
      })    
    const FileRule = config.module.rule('file')  
    FileRule.uses.clear()    
    FileRule        
      .test(/\.svg$/)        
      .exclude.add(path.resolve(__dirname, './src/icons'))        
      .end()        
      .use('file-loader')        
      .loader('file-loader')
  },
  publicPath: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: 'public', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: '二更灼见', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
        // 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
        data: `
          @import "@/styles/variables.scss";
          @import "@/styles/index.scss";
          $src: "${process.env.VUE_APP_BASE_API}";
          `
      }
    }
  },
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD // 生产环境的 source map
}


