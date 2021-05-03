<template>
  <div class="imageText" :class="{ 'imageText-flipped': $props.flipped }">
    <div class="imageText__left">
      <div class="imageText__textWrapper">
        <h1 v-if="$props.copy.heading" class="imageText__heading" v-text="$props.copy.heading" />
        <p v-if="$props.copy.question" class="imageText__question" v-html="$props.copy.question" />
        <p class="imageText__body" v-html="$props.copy.body" />
      </div>
    </div>
    <div class="imageText__right">
      <img :src="imgSrc" class="imageText__img" :class="{ 'imageText__img-margin': $props.copy.text }"/>
      <p v-if="$props.copy.text" class="imageText__text" v-text="$props.copy.text" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'TmageText',
  props: {
    copy: Object,
    flipped: Boolean
  },
  computed: {
    imgSrc: function () {
      return this.$props.copy.img ? require('@/assets/images/' + this.$props.copy.img) : '@/assets/images/dummy-img.png'
    }
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
  z-index: -1;

  @include mq($from: tablet) {
    flex-direction: row;
  }

  &-flipped {
    @include mq($from: tablet) {
      flex-direction: row-reverse;
    }
  }

  &__left {
    padding: 32px 32px 60px 32px;
    width: 100%;

    @include mq($from: tablet) {
      @include flex-center;
      width: 50%;
    }
  }

  &__right {
    width: 100%;
    position: relative;

    @include mq($from: tablet) {
      width: 50%;
    }
  }

  &__img {
    object-fit: cover;
    object-position: center;
    display: block;
    height: 100%;
    width: 100%;

    @include mq($from: tablet) {
      &-margin {
        padding-bottom: 55px;
      }
    }

    &::after {
      content: '';
      display: block;
      padding-bottom: 120.53%;
    }
  }

  &__textWrapper {
    @include mq($from: tablet) {
      max-width: 460px;
    }
  }

  &__text {
    bottom: 0px;
    margin: 10px 10px 0 10px;
    z-index: 10;
    color: color(red);
    @include body;

    @include mq($from: tablet) {
      position: absolute;
      bottom: 12px;
      left: 0px;
      margin: 0;
    }
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    text-transform: uppercase;
    font-size: 32px;
    line-height: 38px;
    color: color(red);
    margin-bottom: 24px;

    @include mq($from: tablet) {
      font-size: 50px;
      line-height: 60px;
    }
  }

  &__body,
  &__question {
    @include body;
  }

  &__question {
    font-weight: bold;
  }
}
</style>
