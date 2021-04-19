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
  min-height: 100vh;
  width: 100%;
  background-color: #3DB96D;
  color: color(white);
  position: relative;

  background: url('~@/assets/images/hero.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  &__wrapper {
    position: absolute;
    left: 50%;
    top: 32%;
    max-width: 693px;
  }

  &__logo {
    width: 340px;
    height: 44px;
    position: absolute;
    top: 30px;
    right: 25px;
  }

  &__img {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: none;
  }

  &__heading {
    @include mq($from: tablet) {
      font-size: 72px;
      line-height: 80px;
      text-transform: uppercase;
      font-family: 'Marguerite Grotesk';
      margin-bottom: 45px;
    }
  }

  &__body {
    max-width: 590px;
    font-size: 30px;
    line-height: 40px;
    font-family: 'Marguerite Grotesk';
  }
}
</style>
