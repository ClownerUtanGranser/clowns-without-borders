<template>
  <div
    class="graphic"
    :style="{
      width: $props.width,
      height: $props.height
    }"
  >
    <slot />
    <circle
      class="graphic__circle"
      cx="332.5"
      cy="332.5"
      r="332.5"
      :fill="$props.color"
    />
  </div>
</template>

<script>
export default {
  name: 'Graphic',
  props: {
    width: {
      type: String,
      default: '232px'
    },
    height: {
      type: String,
      default: '232px'
    },
    color: {
      type: String,
      default: '#FF5068'
    }
  }
}
</script>

<style lang="scss">
.graphic {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
