<template>
  <kinesis-container event="scroll">
    <div class="subChapter">
      <div class="subChapter__index">
        <kinesis-element
          :strength="pinkCircleSpeed"
          class="subChapter__pinkCircle"
          :class="{'subChapter__pinkCircle-margin': $props.margin }"
        />
        <kinesis-element :strength="yellowCircleSpeed" class="subChapter__yellowCircle" />
      </div>
      <div class="subChapter__left">
        <div class="subChapter__headingWrapper">
          <h1 class="subChapter__heading" v-text="$props.copy.heading" />
        </div>
      </div>
      <div class="subChapter__right">
        <p v-if="$props.copy.question" class="subChapter__question" v-text="$props.copy.question" />
        <p class="subChapter__body" v-html="$props.copy.body" />
      </div>
    </div>
  </kinesis-container>
</template>

<script>
export default {
  name: 'SubChapter',
  props: {
    copy: Object,
    margin: Boolean
  },
  computed: {
    pinkCircleSpeed: function () {
      if (window.innerWidth <= 768) {
        return 25
      } else {
        return 0
      }
    },
    yellowCircleSpeed: function () {
      if (window.innerWidth <= 768) {
        return 25
      } else {
        return 25
      }
    }
  }
}
</script>

<style lang="scss">
.subChapter {
  @include flex-center;
  flex-direction: column;
  background-color: color(light-pink);
  width: 100%;
  position: relative;
  z-index: -1;

  @include mq($from: 900px) {
    flex-direction: row;
  }

  &__left,
  &__right {
    width: 100vw;
    @include flex-center;

    @include mq($from: 900px) {
      min-height: 900px;
      width: 50vw;
    }
  }

  &__left {
    background-color: color(beige);
    justify-content: flex-start;

    @include mq($from: 900px) {
      background-color: color(light-pink);
    }
  }

  &__right {
    background-color: color(beige);
    flex-direction: column;
  }

  &__headingWrapper {
    min-height: 80px;
    background-color: color(green);
    border-radius: 0px 100px 100px 0px;
    display: flex;
    align-items: center;
    width: 77.5vw;
    margin: 40px 0;

    @include mq($from: 900px) {
      margin: 0;
      min-height: 164px;
      width: calc(100% - 20px);
    }
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    color: color(red);
    margin-left: 32px;
    text-transform: uppercase;
    font-size: 43px;
    line-height: 52px;
    padding: 16px 16px 16px 0;

    @include mq($from: 900px) {
      font-size: 72px;
      line-height: 80px;
      padding: 24px;
    }
  }

  &__body {
    padding: 32px 32px 147px 32px;

    @include mq($from: 900px) {
      padding: 60px 0;
      margin-right: 32px;
    }
  }

  &__body,
  &__question {
    font-size: 18px;
    line-height: 35px;
    font-family: 'DM Sans';
    z-index: 2;

    @include mq($from: 900px) {
      font-size: 24px;
      line-height: 35px;
      padding-left: 0;
  //     margin-top: 110px;
      margin-left: 60px;
      max-width: 520px;
    }
  }

  &__question {
    font-weight: bold;
    text-align: left;
    padding: 32px 32px 0px 32px;

    @include mq($from: 900px) {
      padding: 60px 0px 0px 0px;
    }
  }

  &__pinkCircle {
    width: 115px;
    background-color: color(pink);
    border-radius: 50%;
    position: absolute;
    bottom: 25px;
    left: -30px;

    @include mq($from: tablet) {
      width: 285px;
      right: -227px;
      bottom: 10px;
      left: 0;

      &-margin {
        bottom: -30px;
      }
    }

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  &__yellowCircle {
    width: 128px;
    height: 128px;
    background-color: color(yellow);
    border-radius: 50%;
    position: absolute;
    display: none;
    z-index: 1;

    @include mq($from: tablet) {
      display: inherit;
      width: 94px;
      height: 94px;
      bottom: 70px;
      right: 30px;
    }

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
}
</style>
