<template>
  <div class="textBlock">
    <Block>
      <div class="textBlock__wrapper">
        <h1
          v-if="$props.copy.heading"
          class="textBlock__heading"
          v-text="$props.copy.heading"
        />
        <p
          v-if="$props.copy.body"
          class="textBlock__body"
          v-html="$props.copy.body"
        />
      </div>
    </Block>
  </div>
</template>

<script>
import Block from '@/components/ui/block'

export default {
  name: 'TextBlock',
  props: {
    copy: Object
  },
  components: {
    Block
  }
}
</script>

<style lang="scss">
.textBlock {
  @include flex-center;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to left, color(beige) 50%, color(light-pink) 50%);

  &__body {
    font-size: 24px;
    line-height: 35px;
    font-family: 'DM Sans';
    text-align: center;
  }

  &__wrapper {
    max-width: 740px;
    padding: 165px 0;
  }
}
</style>
