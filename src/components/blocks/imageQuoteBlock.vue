<template>
  <div
    class="imageQuote"
    :class="{
      'imageQuote-flipped': $props.flipped,
    }"
  >
    <div class="imageQuote__left">
      <div class="imageQuote__circleWrapper">
        <p class="imageQuote__body" v-text="$props.copy.body" />
        <img class="imageQuote__circle" src="@/assets/images/circle.svg" />
      </div>
    </div>
    <div class="imageQuote__right">
      <img class="imageQuote__img" src="@/assets/images/dummy-img.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageQuote',
  props: {
    copy: Object,
    flipped: Boolean
  }
}
</script>

<style lang="scss">
.imageQuote {
  display: flex;
  min-height: 1113px;
  flex-direction: column-reverse;
  width: 100%;
  background: color(yellow);
  position: relative;

  @include mq($from: tablet) {
    flex-direction: row;
    min-height: 100vh;
  }

  &-flipped {
    @include mq($from: tablet) {
      flex-direction: row-reverse;
    }
  }

  &__left {
  //   width: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
    position: relative;
  //
  //   @include mq($from: tablet) {
  //     flex-direction: row;
  //     justify-content: center;
  //     min-height: 100vh;
  //     width: 50%;
  //   }
  }

  &__circleWrapper {
  //   width: 100%;
  //   height: 100%;
  //   // height: calc(100% - 236px);
  //   // width: calc(100% - 50px);
  //   // background-color: color(green);
  //   // border-radius: 50%;
    position: absolute;
  //   // display: flex;
  //   // justify-content: center;
  //   // align-items: center;
  //   // left: 25px;
  //   // top: 118px;
  //   // left: 50%;
  //   // top: 50%;
  //   // transform: translate(-50%, -50%);
  }

  &__circle {
    position: absolute;
  //   width: calc(100% - 60px);
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    min-width: 665px;

    @include mq($from: tablet) {
      left: 30px;
      transform: translateY(-50%);
    }
  }
  //
  // &__right {
  //   width: 100%;
  //   overflow: hidden;
  //
  //   @include mq($from: tablet) {
  //     width: 50%;
  //     height: 100vh;
  //   }
  // }

  &__img {
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

  // &__heading {
  //   font-family: 'Marguerite Grotesk';
  //   // text-transform: uppercase;
  //   font-size: 50px;
  //   line-height: 60px;
  //   color: color(red);
  //   margin: 30px 0;
  //
  //   @include mq($from: tablet) {
  //     margin-top: 0;
  //   }
  // }
  //
  // &__body {
  //   @include body;
  //   text-align: center;
  //   color: color(yellow);
  //   z-index: 4;
  //   position: absolute;
  //   top: 50%;
  //   left: 60px;
  //   right: 60px;
  //   transform: translateY(-50%);
  // }
  //
  // &__wrapper {
  //   max-width: 740px;
  //   padding: 60px 0;
  //
  //   @include mq($from: tablet) {
  //     padding: 165px 0;
  //   }
  // }
}
</style>
