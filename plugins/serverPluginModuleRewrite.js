const {readBody} = require('../utils')
const {} = require('es-module-lexer')
function moduleRewritePlugin({app,root}){
  app.use(async(ctx,next)=>{
    await next()
    if(ctx.body&&ctx.response.is('js')){
      let content = await readBody(ctx.body) 
      console.log(content) 
      // const result = rewriteImports(content);
      // ctx.body = result;

    }
     
  })
}
exports.moduleRewritePlugin = moduleRewritePlugin 