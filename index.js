const Koa = require('koa');
const { serveStaticPlugin } = require('./plugins/serverPluginServeStatic')
const { moduleRewritePlugin} = require('./plugins/serverPluginModuleRewrite')
function createServer() {
  const app = new Koa();
  const root = process.cwd();
  const context = {
    app,
    root
  }
  const resolvePlugins = [
    // 解析import
    moduleRewritePlugin,
    // 静态服务
    serveStaticPlugin
  ]
  resolvePlugins.forEach(plugin => plugin(context))
  return app
}
module.exports = createServer