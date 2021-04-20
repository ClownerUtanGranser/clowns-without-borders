<template>
  <div class="subChapter">
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
</template>

<script>
export default {
  name: 'SubChapter',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.subChapter {
  @include flex-center;
  flex-direction: column;
  background-color: color(light-pink);
  width: 100%;

  @include mq($from: 900px) {
    flex-direction: row;
  }

  &__left,
  &__right {
    width: 100vw;
    @include flex-center;

    @include mq($from: 900px) {
      // align-items: flex-start;
      min-height: 100vh;
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
    line-height: 80px;

    @include mq($from: 900px) {
      font-size: 72px;
      line-height: 80px;
    }
  }

  &__body {
    padding: 0px 32px 32px 32px;

    @include mq($from: 900px) {
      padding-left: 0;
    }
  }

  &__body,
  &__question {
    font-size: 18px;
    line-height: 35px;
    font-family: 'DM Sans';

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
  }
}
</style>
