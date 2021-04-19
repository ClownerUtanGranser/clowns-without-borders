<template>
  <div class="textShape">
    <div class="textShape__left">
      <div class="textShape__circleWrapper">
        <p class="textShape__circleText" v-html="$props.copy.body" />
        <img class="textShape__circle" src="@/assets/images/circle.svg" />
      </div>
    </div>
    <div class="textShape__right">
      <p
        v-if="$props.copy.body"
        class="textShape__body textShape__body-inline"
        v-html="$props.copy.body"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextShape',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.textShape {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to bottom, color(light-green) 50%, color(purple) 50%);
  position: relative;

  @include mq($from: tablet) {
    flex-direction: row-reverse;
  }

  &__left {
    width: 100%;
    // display: flex;
    // flex-direction: column;
    align-items: center;
    position: relative;

    @include mq($from: tablet) {
      justify-content: center;
      width: 50%;
    }
  }

  &__circleWrapper {
    width: 100%;
    height: 100%;
    // height: calc(100% - 236px);
    // width: calc(100% - 50px);
    // background-color: color(green);
    // border-radius: 50%;
    position: absolute;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // left: 25px;
    // top: 118px;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
  }

  &__circleText {
    @include body;
    text-align: center;
    color: color(yellow);
    z-index: 4;
    position: absolute;
    top: 50%;
    left: 60px;
    right: 60px;
    transform: translateY(-50%);
  }

  &__circle {
    position: absolute;
    width: calc(100% - 60px);
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
  }

  &__right {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @include mq($from: tablet) {
      width: 50%;
      // height: 100vh;
    }
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    // text-transform: uppercase;
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
    color: color(black);
    max-width: 536px;
    background-color: color(light-pink);
    padding: 165px 72px 80px 72px;
    margin-top: 60px;
    border-radius: 300px 300px 0 0;
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
