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
  }

  &__headingWrapper {
    min-height: 164px;
    background-color: color(green);
    width: calc(100% - 20px);
    border-radius: 0px 100px 100px 0px;
    display: flex;
    align-items: center;
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
