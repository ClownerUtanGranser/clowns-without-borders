<template>
  <div
    class="graphic"
    :style="{
      width: $props.width,
      height: $props.height
    }"
  >
    <slot />
    <svg class="graphic__circle" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 665 665">
      <circle
        cx="332.5"
        cy="332.5"
        r="332.5"
        :fill="$props.color"
      />
    </svg>
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
    top: 0;
    left: 0;
  }
}
</style>
