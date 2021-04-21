<template>
  <div class="image">
    <img :src="imgSrc" class="image__img" />
  </div>
</template>

<script>
export default {
  name: 'MediaImage',
  props: {
    copy: Object
  },
  computed: {
    imgSrc: function () {
      return this.$props.copy.img ? require('@/assets/images/' + this.$props.copy.img) : '@/assets/images/dummy-img.png'
    }
  }
}
</script>

<style lang="scss">
.image {
  background-color: color(red);
  @include flex-center;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 680px;
  max-height: 453px;

  &:after {
    content: '';
    display: block;
    padding-bottom: 66.62%;
  }

  &__img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
}
</style>
