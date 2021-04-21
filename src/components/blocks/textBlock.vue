<template>
  <kinesis-container event="scroll">
    <div class="textBlock">
      <kinesis-element :strength="25" class="textBlock__yellowCircle" />
      <kinesis-element :strength="75" class="textBlock__greenCircle" />
      <Block>
        <div class="textBlock__wrapper">
          <p
            v-if="$props.copy.heading"
            class="textBlock__heading"
            v-text="$props.copy.heading"
          />
          <p
            v-if="$props.copy.intro"
            class="textBlock__body"
            v-html="$props.copy.intro"
          />
          <p
            v-if="$props.copy.question"
            class="textBlock__question"
            v-html="$props.copy.question"
          />
          <p
            v-if="$props.copy.body"
            class="textBlock__body"
            v-html="$props.copy.body"
          />
          <p
            v-if="$props.copy.question2"
            class="textBlock__question"
            v-html="$props.copy.question2"
          />
          <p
            v-if="$props.copy.body2"
            class="textBlock__body"
            v-html="$props.copy.body2"
          />
          <div
            v-show="$props.copy.list"
            v-for="(item, index) in $props.copy.list"
            :key="index"
          >
            <p
              class="textBlock__question"
              v-html="item.title"
            />
            <p
              class="textBlock__body"
              v-html="item.body"
            />
          </div>
        </div>
      </Block>
    </div>
  </kinesis-container>
</template>

<script>
import Block from '@/components/ui/block'

export default {
  name: 'TextBlock',
  props: {
    copy: Object
  },
  components: {
    Block
  }
}
</script>

<style lang="scss">
.textBlock {
  @include flex-center;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to left, color(beige) 50%, color(light-pink) 50%);

  &__heading,
  &__body,
  &__question {
    @include body;
    text-align: center;
  }

  &__question {
    font-weight: bold;
  }

  &__heading {
    font-weight: bold;
    margin-bottom: 20px;

    @include mq($from: tablet) {
      margin-bottom: 45px;
    }
  }

  &__wrapper {
    max-width: 740px;
    padding: 60px 0;

    @include mq($from: tablet) {
      padding: 165px 0;
    }
  }

  a {
    color: color(red);
  }

  &__yellowCircle {
    width: 58px;
    background-color: color(yellow);
    border-radius: 50%;
    position: absolute;
    top: 60px;
    left: 45px;
    display: none;

    @include mq($from: tablet) {
      display: inherit;
      width: 200px;
      top: 235px;
      left: calc(50% - 655px);
      transform: translateX(-50%);
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
      right: 273px;
      width: 114px;
      background-color: color(green);
      border-radius: 50%;
      position: absolute;
      bottom: 450px;
      right: 273px;
    }

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
}
</style>
