<template>
  <div class="chapter">
    <h1 v-text="$props.copy.heading" />
    <p v-text="$props.copy.body" />
  </div>
</template>

<script>
export default {
  name: 'Chapter',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.chapter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: color(beige);
}
</style>
