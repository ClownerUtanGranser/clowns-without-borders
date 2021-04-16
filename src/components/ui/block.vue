<template>
  <div class="block">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Block'
}
</script>

<style lang="scss">
.block {
  padding: 0 30px;

  @include mq($from: tablet) {
    padding: 0 145px;
  }
}
</style>
