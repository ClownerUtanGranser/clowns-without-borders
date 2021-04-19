<template>
  <!-- <kinesis-container event="scroll"> -->
    <div class="country">
      <div class="country__left">
        <!-- <kinesis-element :strength="1370" axis="y"> -->
          <!-- <Graphic :width="'130px'" :height="'130px'" :color="'#B8BCFE'" /> -->
        <!-- </kinesis-element> -->
        <div class="country__textWrapper">
          <h1 class="country__heading" v-text="$props.copy.heading" />
          <p class="country__body" v-html="$props.copy.body" />
        </div>
      </div>
      <div class="country__right">
        <div class="country__circleWrapper">
          <div class="country__circle">
            <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
              <p class="country__countryHeading">Syria</p>
              <img class="country__country" src="@/assets/images/syria.svg" />
            </Graphic>
          </div>
          <div class="country__circle">
            <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
              <p class="country__countryHeading">Syria</p>
              <img class="country__country" src="@/assets/images/syria.svg" />
            </Graphic>
          </div>
          <div class="country__circle">
            <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
              <p class="country__countryHeading">Syria</p>
              <img class="country__country" src="@/assets/images/syria.svg" />
            </Graphic>
          </div>
          <div class="country__circle">
            <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
              <p class="country__countryHeading">Syria</p>
              <img class="country__country" src="@/assets/images/syria.svg" />
            </Graphic>
          </div>
        </div>
      </div>
    </div>
  <!-- </kinesis-container> -->
</template>

<script>
import Graphic from '@/components/ui/graphic'

export default {
  name: 'Country',
  props: {
    copy: Object
  },
  components: {
    Graphic
  }
}
</script>

<style lang="scss">
.country {
  @include flex-center;
  background: linear-gradient(to left, color(beige) 50%, color(light-pink) 50%);
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  @include mq($from: tablet) {
    flex-direction: row;
  }

  &__left,
  &__right {
    height: 100%;
    width: 100vw;

    @include mq($from: tablet) {
      width: 50vw;
    }
  }

  &__left {
    background-color: color(light-pink);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 20px;

    @include mq($from: tablet) {
      padding: 165px 0;
    }
  }

  &__right {
    background-color: color(beige);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;

    @include mq($from: tablet) {
      flex-direction: row;
      padding: 0;
    }
  }

  &__circle {
    // background: url('~@/assets/images/circle.svg');
    background-size: cover;
    background-repeat: no-repeat;
    @include flex-center;
    justify-content: center;
    flex-direction: column;
    border-radius: 50%;
    height: 230px;
    width: 230px;
  }

  &__circleWrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
    max-width: 507px;
    justify-items: center;
    padding: 60px 0;

    @include mq($from: tablet) {
      grid-template-columns: repeat(2, 1fr);
      padding: 0px;
      column-gap: 50px;
      row-gap: 105px;
    }
  }

  &__countryHeading {
    font-family: 'Marguerite Grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: color(red);
    margin-bottom: 10px;
    z-index: 2;

    @include mq($from: tablet) {
      font-size: 24px;
      line-height: 29px;
    }
  }

  &__country {
    display: inline-flex;
    z-index: 2;
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    text-transform: uppercase;
    line-height: 38px;
    color: color(red);
    margin-bottom: 30px;
    font-size: 32px;

    @include mq($from: tablet) {
      margin-bottom: 30px;
      font-size: 50px;
      line-height: 60px;
    }
  }

  &__textWrapper {
    max-width: 484px;
  }

  &__body {
    @include body;
  }
}
</style>
