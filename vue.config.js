module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/styles/variables.scss';
          @import '~sass-mq';
          @import '@/styles/reset.scss';
          @import '@/styles/functions.scss';
          @import '@/styles/typography.scss';
        `
      }
    }
  }
}
