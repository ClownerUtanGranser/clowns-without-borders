<template>
  <kinesis-container event="scroll">
    <div class="chapter">
      <div class="chapter__pinkCircle" />
      <kinesis-element :strength="25" class="chapter__yellowCircle" />
      <kinesis-element :strength="75" class="chapter__greenCircle" />
      <div class="chapter__wrapper">
        <h1
          v-if="$props.copy.heading"
          class="chapter__heading"
          v-text="$props.copy.heading"
          :class="{
            'chapter__heading-small': $props.smallerText
          }"
        />
      </div>
    </div>
  </kinesis-container>
</template>

<script>

export default {
  name: 'Chapter',
  props: {
    copy: Object,
    smallerText: Boolean
  }
}
</script>

<style lang="scss">
.chapter {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  min-height: 450px;
  background: color(purple);
  position: relative;

  @include mq($from: tablet) {
    background: linear-gradient(to bottom, color(purple) 50%, color(beige) 50%);
    align-items: center;
    min-height: 950px;
  }

  &__wrapper {
    min-height: 286px;
    display: flex;
    align-items: center;
    min-width: 336px;
    margin-right: 40px;
    padding: 32px 0 37px 0;
    background-color: color(red);
    border-radius: 0px 210px 210px 0px;

    &-longer {
      width: auto;
      margin-right: 40px;
    }

    @include mq($from: tablet) {
      min-height: 353px;
      max-width: 1085px;
      width: 77.5vw;
    }
  }

  &__pinkCircle {
    width: 178px;
    background-color: color(pink);
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: -72px;

    @include mq($from: tablet) {
      width: 475px;
      right: -227px;
    }

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  &__yellowCircle {
    width: 58px;
    background-color: color(yellow);
    border-radius: 50%;
    position: absolute;
    top: 60px;
    left: 45px;

    @include mq($from: tablet) {
      width: 101px;
      left: 75px;
    }

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  &__greenCircle {
    display: none;

    @include mq($from: tablet) {
      display: inherit;
      width: 219px;
      right: 273px;
      width: 178px;
      background-color: color(green);
      border-radius: 50%;
      position: absolute;
      bottom: 50px;
      right: 273px;
    }

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    color: color(white);
    margin-left: 32px;
    padding-right: 50px;
    text-transform: uppercase;
    font-size: 43px;
    line-height: 52px;

    @include mq($from: tablet) {
      font-size: 72px;
      line-height: 80px;
      padding-right: 40px;
    }

    &-small {
      @include mq($until: tablet) {
        font-size: 36px;
        line-height: 40px;
      }
    }
  }
}
</style>
