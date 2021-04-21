<template>
  <kinesis-container event="scroll">
    <div class="country">
      <div class="country__left">
        <div class="country__textWrapper">
          <kinesis-element :strength="purpleCircleSpeed">
            <GraphicCircle
              :height="'115px'"
              :width="'115px'"
              :color="'purple'"
              :hiddenOnMobile="true"
            />
          </kinesis-element>
          <h1 class="country__heading" v-text="$props.copy.heading" />
          <p class="country__body" v-html="$props.copy.body" />
        </div>
      </div>
      <div class="country__right">
        <div class="country__circleWrapper">
          <div class="country__circle">
            <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
              <p class="country__countryHeading" v-text="'Syria'" />
              <img class="country__country" src="@/assets/images/syria.svg" />
            </Graphic>
          </div>
          <div class="country__circle">
            <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
              <p class="country__countryHeading country__countryHeading-palestine" v-text="'Palestine'" />
              <img class="country__country" src="@/assets/images/palestine.svg" />
            </Graphic>
          </div>
          <div class="country__circle">
            <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
              <p class="country__countryHeading" v-text="'Jordan'" />
              <img class="country__country" src="@/assets/images/jordan.svg" />
            </Graphic>
          </div>
          <div class="country__circle">
            <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
              <p class="country__countryHeading" v-text="'Lebanon'" />
              <img class="country__country" src="@/assets/images/lebanon.svg" />
            </Graphic>
          </div>
        </div>
        <kinesis-element :strength="yellowCircleSpeed" class="country__yellowCircle" />
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import Graphic from '@/components/ui/graphic'
import GraphicCircle from '@/components/ui/graphicCircle'

export default {
  name: 'Country',
  props: {
    copy: Object
  },
  components: {
    Graphic,
    GraphicCircle
  },
  computed: {
    purpleCircleSpeed: function () {
      if (window.innerWidth <= 768) {
        return 150
      } else {
        return 200
      }
    },
    yellowCircleSpeed: function () {
      if (window.innerWidth <= 768) {
        return 150
      } else {
        return 200
      }
    }
  }
}
</script>

<style lang="scss">
.country {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  @include mq($from: 1100px) {
    flex-direction: row;
  }

  &__left,
  &__right {
    @include mq($from: 1100px) {
      width: 50vw;
    }
  }

  &__left {
    background-color: color(light-pink);
    display: flex;
    justify-content: center;
    padding: 32px;

    @include mq($from: tablet) {
      padding: 300px 0 165px 0;
    }
  }

  &__right {
    background-color: color(beige);
    @include flex-center;
    padding: 32px;
    position: relative;

    @include mq($from: tablet) {
      padding: 165px 0;
    }

    @include mq($from: 1100px) {
      padding: 0;
    }
  }

  &__circleWrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 32px;

    @include mq($from: tablet) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
      row-gap: 50px;
    }
  }

  &__circle {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background-color: color(light-green);
  }

  &__countryHeading {
    font-family: 'Marguerite Grotesk';
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: color(red);
    z-index: 2;
    margin-bottom: 16px;

    &-palestine {
      margin-bottom: -16px;
      padding-top: 20px;
    }
  }

  &__country {
    z-index: 2;
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    text-transform: uppercase;
    font-size: 32px;
    line-height: 38px;
    color: color(red);
    margin-bottom: 24px;

    @include mq($from: 1100px) {
      margin-bottom: 48px;
      font-size: 50px;
      line-height: 60px;
    }
  }

  &__textWrapper {
    max-width: 484px;
    position: relative;
    z-index: 2;
  }

  &__body {
    @include body;
  }

  &__yellowCircle {
    @include mq($from: 1100px) {
      width: 95px;
      height: 95px;
      background-color: color(yellow);
      position: absolute;
      bottom: 118.5px;
      right: 72px;
      border-radius: 50%;
      z-index: 13;
    }
  }
}
</style>
