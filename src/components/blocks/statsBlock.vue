<template>
  <div class="stats">
    <div class="stats__left">
      <h1 class="stats__heading" v-text="$props.copy.heading" />
      <p
        class="stats__body"
        v-html="$props.copy.body"
        :class="{
          'stats__body-italic': $props.italic,
        }"
      />
      <p v-if="$props.copy.writer" class="stats__body" v-text="$props.copy.writer" />
    </div>
    <div class="stats__right">
      <div
        v-if="$props.copy.list"
        class="stats__circleWrapper"
        :class="{'stats__circleWrapper-two': $props.copy.list[1].title === '' }"
      >
        <div
          v-for="(item, index) in $props.copy.list"
          :key="index"
          class="stats__circle"
          :class="'stats__circle-' + index"
        >
          <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
            <p
              class="stats__countryHeading"
              :class="{'stats__countryHeading-two': $props.copy.list[1].title === '' }"
              v-text="item.title"
            />
            <p
              class="stats__countryBody"
              :class="{'stats__countryBody-two': $props.copy.list[1].title === '' }"
              v-text="item.body"
            />
          </Graphic>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Graphic from '@/components/ui/graphic'

export default {
  name: 'Stats',
  props: {
    copy: Object,
    italic: Boolean
  },
  components: {
    Graphic
  }
}
</script>

<style lang="scss">
.stats {
  @include flex-center;
  width: 100%;
  flex-direction: column;

  @include mq($from: tablet) {
    flex-direction: row;
  }

  &__left,
  &__right {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 32px;

    @include mq($from: tablet) {
      width: 50vw;
      min-height: 100vh;
      padding: 0px;
    }
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

  &__circleWrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 32px;
    justify-content: center;

    @include mq($from: tablet) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
      row-gap: 50px;
    }

    &-two {
      column-gap: 0px;
      row-gap: 0px;
    }
  }

  &__circle {
    overflow: hidden;
    text-align: center;
    @include flex-center;

    &-1,
    &-2 {
      opacity: 0;
    }
  }

  &__countryHeading,
  &__countryBody {
    font-family: 'Marguerite Grotesk';
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: color(red);
    z-index: 2;
  }

  &__countryBody {
    margin-top: 24px;

    &-two {
      font-size: 50px;
      line-height: 60px;
      color: color(black);
    }
  }

  &__countryHeading {
    &-two {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__statsHeading {
    text-align: center;
    font-family: 'Marguerite Grotesk';
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: color(red);
    z-index: 2;
    max-width: 191px;
    margin-bottom: 32px;
  }

  &__statsPercentage {
    font-family: 'Marguerite Grotesk';
    color: color(black);
    font-size: 50px;
    line-height: 60px;
    z-index: 2;
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
    font-size: 16px;
    line-height: 19px;

    @include mq($from: tablet) {
      margin-left: 60px;
      margin-right: 120px;
    }

    &-italic {
      font-family: 'DM Sans italic';
      margin-bottom: 24px;
    }
  }
}
</style>
