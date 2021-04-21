<template>
  <div
    class="graphicCircle"
    :style="{
      width: $props.width,
      height: $props.height,
    }"
    :class="{
      'graphicCircle-purple': $props.color === 'purple',
      'graphicCircle-hiddenOnMobile': $props.hiddenOnMobile
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GraphicCircle',
  props: {
    width: {
      type: String,
      default: '230px'
    },
    height: {
      type: String,
      default: '230px'
    },
    color: {
      type: String,
      default: 'purple'
    },
    hiddenOnMobile: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.graphicCircle {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -154px;
  right: 180px;
  border-radius: 50%;
  z-index: 1;

  &-purple {
    background-color: color(purple);
  }

  &-hiddenOnMobile {
    @include mq($until: tablet) {
      display: none;
    }
  }

  // &:hover {
  //   background-color: color(yellow);
  // }
}
</style>
