module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: '0.0.0.0:8080'
  },
  publicPath: "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/styles/variables.scss';
          @import '~sass-mq';
          @import '@/styles/reset.scss';
          @import '@/styles/functions.scss';
          @import '@/styles/typography.scss';
          @import '@/styles/mixins.scss';
        `
      }
    }
  }
}
