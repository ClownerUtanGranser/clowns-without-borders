<template>
  <div class="hero">
    <img class="hero__logo" src="@/assets/images/logo.svg" />
    <div class="hero__wrapper">
      <h1 class="hero__heading" v-text="$props.copy.heading" />
      <p class="hero__body" v-html="$props.copy.body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  min-height: 423px;
  width: 100%;
  background-color: #3DB96D;
  color: color(white);
  position: relative;
  background: url('~@/assets/images/hero-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  @include mq($from: tablet) {
    background-image: url('~@/assets/images/hero.jpg');
    min-height: 100vh;
  }

  &__wrapper {
    position: absolute;
    left: 40px;
    top: 40px;
    // max-width: 693px;

    @include mq($from: tablet) {
      position: absolute;
      left: 50%;
      top: 32%;
      max-width: 693px;
    }
  }

  &__logo {
    width: 113px;
    position: absolute;
    top: 12px;
    right: 12px;

    @include mq($from: tablet) {
      width: 340px;
      height: 44px;
      top: 30px;
      right: 25px;
    }
  }

  &__img {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: none;
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    font-size: 43px;
    line-height: 52px;
    text-transform: uppercase;
    max-width: 250px;

    @include mq($from: tablet) {
      font-size: 72px;
      line-height: 80px;
      text-transform: uppercase;
      font-family: 'Marguerite Grotesk';
      margin-bottom: 45px;
    }
  }

  &__body {
    font-size: 16px;
    line-height: 19px;
    font-family: 'Marguerite Grotesk';
    max-width: 260px;

    @include mq($from: tablet) {
      font-size: 30px;
      line-height: 40px;
      text-transform: uppercase;
      margin-bottom: 45px;
      max-width: 590px;
    }
  }
}
</style>
