<template>
  <div class="textBlock">
    <h1 v-text="$props.copy.heading" />
    <p v-html="$props.copy.body" />
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.textBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: color(yellow);
}
</style>
