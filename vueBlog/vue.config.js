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


