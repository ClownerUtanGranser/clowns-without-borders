module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@styles/variables.scss'
          @import '~sass-mq'
          @import '@styles/functions.scss'
        `
      }
    }
  }
}
