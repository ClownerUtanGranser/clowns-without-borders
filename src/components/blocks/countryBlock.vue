<template>
  <div class="country">
    <div class="country__left">
      <div class="country__textWrapper">
        <h1 class="country__heading" v-text="$props.copy.heading" />
        <p class="country__body" v-html="$props.copy.body" />
      </div>
    </div>
    <div class="country__right">
      <div class="country__circleWrapper">
        <div class="country__circle">
          <p class="country__countryHeading">Syria</p>
          <img class="country__country" src="@/assets/images/syria.svg" />
        </div>
        <div class="country__circle">
          <p class="country__countryHeading">Syria</p>
          <img class="country__country" src="@/assets/images/syria.svg" />
        </div>
        <div class="country__circle">
          <p class="country__countryHeading">Syria</p>
          <img class="country__country" src="@/assets/images/syria.svg" />
        </div>
        <div class="country__circle">
          <p class="country__countryHeading">Syria</p>
          <img class="country__country" src="@/assets/images/syria.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Country',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.country {
  @include flex-center;
  background: linear-gradient(to left, color(beige) 50%, color(light-pink) 50%);
  min-height: 100vh;
  width: 100%;

  &__left,
  &__right {
    height: 100%;
    width: 50vw;
  }

  &__left {
    background-color: color(light-pink);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 165px 0;
  }

  &__right {
    background-color: color(beige);
    display: flex;
    justify-content: center;
  }

  &__circle {
    background: url('~@/assets/images/circle.svg');
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
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    row-gap: 105px;
    max-width: 507px;
  }

  &__countryHeading {
    font-family: 'Marguerite Grotesk';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: color(red);
    margin-bottom: 10px;
  }

  &__country {
    display: inline-flex;
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    text-transform: uppercase;
    font-size: 50px;
    line-height: 60px;
    color: color(red);
    margin: 30px 0;

    @include mq($from: tablet) {
      margin-top: 0;
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
