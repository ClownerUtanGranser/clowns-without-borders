<template>
  <div class="subChapter">
    <div class="subChapter__left">
      <div class="subChapter__headingWrapper">
        <h1 class="subChapter__heading" v-text="$props.copy.heading" />
      </div>
    </div>
    <div class="subChapter__right">
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
  width: 100%;

  @include mq($from: tablet) {
    flex-direction: row;
  }

  &__left,
  &__right {
    width: 100vw;
    @include flex-center;

    @include mq($from: tablet) {
      min-height: 100vh;
      width: 50vw;
    }
  }

  &__left {
    background-color: color(beige);

    @include mq($from: tablet) {
      background-color: color(light-pink);
    }
  }

  &__right {
    background-color: color(beige);
  }

  &__headingWrapper {
    min-height: 80px;
    background-color: color(green);
    width: calc(100% - 20px);
    border-radius: 0px 100px 100px 0px;
    display: flex;
    align-items: center;

    @include mq($from: tablet) {
      min-height: 164px;
    }
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    color: color(red);
    margin-left: 40px;
    padding-right: 40px;
    text-transform: uppercase;
    font-size: 43px;
    line-height: 80px;

    @include mq($from: tablet) {
      font-size: 72px;
      line-height: 80px;
    }
  }

  &__body {
    @include body;
    padding: 30px;

    @include mq($from: tablet) {
      margin-left: 60px;
      margin-right: 120px;
      padding: 0px;
    }
  }
}
</style>
