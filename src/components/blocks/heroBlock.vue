<template>
  <div class="hero">
    <img class="hero__logo" src="@/assets/images/logo.svg" alt="Clowns logo" />
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
  width: 100%;
  height: 100%;
  position: relative;
  background: url('~@/assets/images/hero-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  @include mq($from: tablet) {
    background-image: url('~@/assets/images/hero.jpg');
    min-height: 100vh;
  }

  &__wrapper {
    padding: 32px;
    max-width: 370px;

    @include mq($from: tablet) {
      padding: 0px 40px 40px 0px;
      margin-left: 50%;
      margin-top: 32vh;
      max-width: 690px;
      width: 50vw;
    }
  }

  &__logo {
    width: 112px;
    height: auto;
    position: absolute;
    top: 12px;
    right: 12px;

    @include mq($from: tablet) {
      width: 340px;
      top: 32px;
      right: 24px;
    }
  }

  &__heading,
  &__body {
    font-family: 'Marguerite Grotesk';
    color: color(beige);
  }

  &__heading {
    font-size: 43px;
    line-height: 52px;
    text-transform: uppercase;
    margin-bottom: 24px;

    @include mq($from: tablet) {
      font-size: 72px;
      line-height: 80px;
      margin-bottom: 48px;
    }
  }

  &__body {
    font-size: 16px;
    line-height: 19px;

    @include mq($from: tablet) {
      font-size: 30px;
      line-height: 40px;
    }
  }
}
</style>
