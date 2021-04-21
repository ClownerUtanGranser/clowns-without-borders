<template>
  <div class="textShape">
    <div class="textShape__left">
      <!-- <div class="textShape__circleWrapper">
        <p class="textShape__circleText" v-html="$props.copy.body" />
        <img class="textShape__circle" src="@/assets/images/circle.svg" />
      </div> -->
      <div class="textShape__circleWrapper">
        <p
          class="textShape__quote"
          v-html="$props.copy.quote"
        />
        <!-- <img class="imageQuote__circle" src="@/assets/images/circle.svg" /> -->
      </div>
    </div>
    <div class="textShape__right">
      <div class="textShape__wrapper">
        <p
          v-if="$props.copy.question"
          class="textShape__question"
          v-html="$props.copy.question"
        />
        <p
          v-if="$props.copy.body"
          class="textShape__body textShape__body-inline"
          v-html="$props.copy.body"
        />
      </div>
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
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  position: relative;

  @include mq($from: 1400px) {
    flex-direction: row-reverse;
  }

  &__left,
  &__right {
    width: 100%;
    display: flex;
    position: relative;

    @include mq($from: 1400px) {
      width: 50%;
    }
  }

  &__left {
    background-color: color(green);

    @include mq($from: 1400px) {
      justify-content: flex-start;
      align-items: center;
    }
  }

  &__right {
    background-color: color(light-green);
    justify-content: center;
    padding-top: 32px;
    height: 100%;

    @include mq($from: 1400px) {
      padding-left: 32px;
      padding-top: 0px;
      justify-content: flex-end;
    }
  }

  &__wrapper {
    color: color(black);
    max-width: 536px;
    background-color: color(light-pink);
    padding: 112px 32px 32px 32px;
    border-radius: 300px 300px 0 0;
    margin: 0 32px;

    @include mq($from: 500px) {
      padding: 165px 72px 80px 72px;
      max-width: 536px;
    }

    @include mq($from: 1400px) {
      margin-top: 60px;
    }
  }

  &__circleWrapper {
    background-color: color(yellow);
    position: relative;
    border-radius: 50%;
    min-width: 665px;
    min-height: 665px;
    margin: 32px 50%;
    transform: translateX(-50%);

    @include mq($from: 1400px) {
      max-width: 665px;
      margin: 32px 0 32px 32px;
      transform: none;
      margin-top: 60px;

      &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }
    }
  }

  &__quote {
    font-family: "Marguerite Grotesk";
    text-align: center;
    font-size: 18px;
    line-height: 29px;
    color: color(green);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include mq($from: tablet) {
      width: 100%;
      padding: 80px;
      font-size: 30px;
      line-height: 40px;
    }
  }

  &__body,
  &__question {
    @include body;
  }

  &__question {
    font-weight: bold;
  }

  a {
    color: color(red);
  }
}
</style>
