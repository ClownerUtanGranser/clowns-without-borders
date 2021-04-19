<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Creative Arts for Peace and Equality',
    meta: [
      { name: 'title', content: 'Creative Arts for Peace and Equality' },
      { name: 'description', content: 'Creative Arts for Peace and Equality is a project started by Clowns Without Borders Sweden, financed by the Folke Bernadotte Academy.' },
      { property: 'og:image', content: `${process.env.BASE_URL}share.png`}
    ]
  }
}
</script>

<style>
@import '/styles/reset.scss';

#app {
  overflow: hidden;
}
</style>
