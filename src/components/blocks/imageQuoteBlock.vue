<template>
  <div class="imageQuote">
    <p v-text="$props.copy.body" />
  </div>
</template>

<script>
export default {
  name: 'ImageQuote',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.imageQuote {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: color(light-yellow);
}
</style>
