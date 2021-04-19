<template>
  <div class="stats">
    <div class="stats__left">
      <h1 class="stats__heading" v-text="$props.copy.heading" />
      <p class="stats__body" v-html="$props.copy.body" />
    </div>
    <div class="stats__right">
      <img class="stats__circle" src="@/assets/images/circle.svg" />
      <img class="stats__circle" src="@/assets/images/circle.svg" />
      <img class="stats__circle" src="@/assets/images/circle.svg" />
      <img class="stats__circle" src="@/assets/images/circle.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.stats {
  @include flex-center;
  width: 100%;

  &__left,
  &__right {
    min-height: 100vh;
    width: 50vw;
    @include flex-center;
  }

  &__left {
    background-color: color(light-pink);
  }

  &__right {
    background-color: color(beige);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  &__circle {
    background-color: color(light-green);
    border-radius: 50%;
    height: 300px;
    width: 300px;
  }

  &__heading {
    font-size: 16px;
    line-height: 29px;
    font-family: 'Marguerite Grotesk';
    color: color(red);
    margin-left: 40px;
    padding-right: 40px;
    text-transform: uppercase;

    @include mq($from: tablet) {
      font-size: 72px;
      line-height: 80px;
    }
  }

  &__body {
    @include body;

    @include mq($from: tablet) {
      margin-left: 60px;
      margin-right: 120px;
    }
  }
}
</style>
