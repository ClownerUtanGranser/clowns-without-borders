<template>
  <div class="textShapeBlock">
    <p v-html="$props.copy.body" />
    <p v-html="$props.copy.quote" />
  </div>
</template>

<script>
export default {
  name: 'TextShapeBlock',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.textShapeBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: color(black);
  color: color(white);
}
</style>
