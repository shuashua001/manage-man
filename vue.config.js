const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {  
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  //关闭eslint语法
  configurewebpack: {    
    resolve: {      
      alias: {        
        '@': resolve('src'),      
      },    
    },  
  },
})
