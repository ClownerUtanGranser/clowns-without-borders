<template>
  <div
    class="imageQuote"
    :class="{
      'imageQuote-flipped': $props.flipped,
    }"
  >
    <div class="imageQuote__left">
      <div class="imageQuote__circleWrapper">
        <p
          class="imageQuote__body"
          :class="{
            'imageQuote__body-big': $props.bigText
          }"
          v-html="$props.copy.body"
        />
        <!-- <img class="imageQuote__circle" src="@/assets/images/circle.svg" /> -->
      </div>
    </div>
    <div class="imageQuote__right">
      <img class="imageQuote__img" :src="imgSrc" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageQuote',
  props: {
    copy: Object,
    flipped: Boolean,
    bigText: Boolean
  },
  computed: {
    imgSrc: function () {
      return this.$props.copy.img ? require('@/assets/images/' + this.$props.copy.img) : '@/assets/images/dummy-img.png'
    }
  }
}
</script>

<style lang="scss">
.imageQuote {
  display: flex;
  min-height: 100vh;
  flex-direction: column-reverse;
  width: 100%;
  // // height: 100%;
  background: color(yellow);
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: -1;

  @include mq($from: 1024px) {
    flex-direction: row;
  //   min-height: 900px;
  }

  &-flipped {
    @include mq($from: 1024px) {
      flex-direction: row-reverse;
    }
  }

  // quote
  &__left {
    width: 100%;
    height: 100%;
    position: relative;
  //   overflow: hidden;

    @include mq($from: 1024px) {
      width: 50%;
      overflow: hidden;
      // margin: auto 0;
      // padding: 32px;
    }
  }

  &__circleWrapper {
    position: relative;
    background-color: color(green);
    border-radius: 50%;
    min-width: 665px;
    min-height: 665px;
    margin: 32px 50%;
    transform: translateX(-50%);

  // //   width: 100%;
  // //   height: 100%;
  // // //   // height: calc(100% - 236px);
  // // //   // width: calc(100% - 50px);
  // // //   // background-color: color(green);
  // // //   // border-radius: 50%;
  // // //   // left: 25px;
  // // //   // top: 118px;
  // // //   // left: 50%;
  // // //   // top: 50%;
  // // //   // transform: translate(-50%, -50%);
  // //
    @include mq($from: 1024px) {
  // //     position: absolute;
  // //     @include flex-center;
      max-width: 665px;
      margin: auto 50%;

      &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }
    }
  }

  // &__circle {
  //   // top: 0;
  // // //   width: calc(100% - 60px);
  //   // top: 50%;
  //   // transform: translate(-50%, -50%);
  //   // margin-left: 50%;
  //   // transform: translate(-50%);
  //   // min-width: 665px;
  //
  //   margin: 32px;
  //
  //   @include mq($from: tablet) {
  //     // position: absolute;
  // //     left: 30px;
  // //     transform: translateY(-50%);
  //   }
  // }

  &__right {
    width: 100%;

    @include mq($from: 1024px) {
      width: 50%;
      min-height: 665px;
  // // //     height: 100vh;
    }
  }

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

    @include mq($from: 1024px) {
      min-height: 100vh;
    }
  }

  // // &__heading {
  // //   font-family: 'Marguerite Grotesk';
  // //   // text-transform: uppercase;
  // //   font-size: 50px;
  // //   line-height: 60px;
  //   // color: color(red);
  // //   margin: 30px 0;
  // //
  // //   @include mq($from: tablet) {
  // //     margin-top: 0;
  // //   }
  // // }
  //
  &__body {
    font-family: "Marguerite Grotesk";
    text-align: center;
    font-size: 18px;
    line-height: 29px;
    color: color(yellow);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  //   padding: 32px 32px;

    @include mq($from: 500px) {
      padding: 30px;
    }

    @include mq($from: 1024px) {
      line-height: 35px;
  //     top: 50%;
  //     left: 60px;
  //     right: 60px;
  //     transform: translateY(-50%);
      width: 100%;
      padding: 80px;
  //     margin: 0 auto;
    }

    &-big {
      @include mq($from: tablet) {
        width: calc(100% - 32px);
        font-size: 30px;
        line-height: 40px;
      }
    }
  }

  // // &__wrapper {
  // //   max-width: 740px;
  // //   padding: 60px 0;
  // //
  // //   @include mq($from: tablet) {
  // //     padding: 165px 0;
  // //   }
  // // }
}
</style>
