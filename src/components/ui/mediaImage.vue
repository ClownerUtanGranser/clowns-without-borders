<template>
  <div class="image">
    <img :src="$props.copy.image[0].src" />
  </div>
</template>

<script>
export default {
  name: 'Image',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.video {
  width: 680px;
  height: 453px;
  background-color: color(red);

  &__image {
    width: 100%;
    height: 100%;
  }
}
</style>
