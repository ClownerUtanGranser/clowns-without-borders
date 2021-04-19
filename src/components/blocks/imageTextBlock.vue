<template>
  <div class="imageText">
    <div class="imageText__left">
      <Block>
        <h1 class="imageText__heading" v-text="$props.copy.heading" />
        <p class="imageText__body" v-text="$props.copy.body" />
      </Block>
    </div>
    <div class="imageText__right">
      <img class="imageText__img" src="@/assets/images/dummy-img.png" />
    </div>
  </div>
</template>

<script>
import Block from '@/components/ui/block'

export default {
  name: 'TmageText',
  props: {
    copy: Object
  },
  components: {
    Block
  }
}
</script>

<style lang="scss">
.imageText {
  display: flex;
  min-height: 100vh;
  flex-direction: column-reverse;
  width: 100%;
  background: color(light-pink);
  position: relative;

  @include mq($from: tablet) {
    flex-direction: row;
  }

  &__left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include mq($from: tablet) {
      flex-direction: row;
      justify-content: center;
      padding-right: 100px;
      min-height: 100vh;
      width: 50%;
    }
  }

  &__right {
    width: 100%;
    overflow: hidden;

    @include mq($from: tablet) {
      width: 50%;
      height: 100vh;
    }
  }

  &__img {
    background-color: grey;
    object-fit: cover;
    display: block;
    height: 100%;
    width: 100%;

    &::after {
      content: '';
      display: block;
      padding-bottom: 120.53%;
    }
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    text-transform: uppercase;
    font-size: 50px;
    line-height: 60px;
    color: color(red);
    margin: 30px 0;

    @include mq($from: tablet) {
      margin-top: 0;
    }
  }

  &__body {
    @include body;
  }

  &__wrapper {
    max-width: 740px;
    padding: 60px 0;

    @include mq($from: tablet) {
      padding: 165px 0;
    }
  }
}
</style>
