<template>
  <div class="imageText">
    <div class="imageText__left">
      <div class="imageText__textWrapper">
        <h1 v-if="$props.copy.heading" class="imageText__heading" v-text="$props.copy.heading" />
        <p v-if="$props.copy.question" class="imageText__question" v-html="$props.copy.question" />
        <p class="imageText__body" v-html="$props.copy.body" />
      </div>
    </div>
    <div class="imageText__right">
      <img class="imageText__img" src="@/assets/images/dummy-img.png" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'TmageText',
  props: {
    copy: Object
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
    padding: 32px 32px 60px 32px;
    width: 100%;

    @include mq($from: tablet) {
      @include flex-center;
      width: 50%;
    }
  }

  &__right {
    width: 100%;

    @include mq($from: tablet) {
      width: 50%;
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

  &__textWrapper {
    @include mq($from: tablet) {
      max-width: 460px;
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
