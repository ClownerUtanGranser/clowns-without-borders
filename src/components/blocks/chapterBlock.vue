<template>
  <div class="chapter">
    <div class="chapter__wrapper">
      <h1
        v-if="$props.copy.heading"
        class="chapter__heading"
        v-text="$props.copy.heading"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Chapter',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.chapter {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 450px;
  background: color(purple);

  @include mq($from: tablet) {
    background: linear-gradient(to bottom, color(purple) 50%, color(beige) 50%);
    height: 100vh;
  }

  &__wrapper {
    min-height: 286px;
    display: flex;
    align-items: center;
    width: 77.5vw;
    // padding: 60px 0;
    background-color: color(red);
    // transform: translateY(-50%);
    border-radius: 0px 210px 210px 0px;

    @include mq($from: tablet) {
      // padding: 165px 0;
      min-height: 353px;
    }
  }

  &__heading {
    font-family: 'Marguerite Grotesk';
    color: color(white);
    margin-left: 30px;
    padding-right: 30px;
    text-transform: uppercase;
    font-size: 43px;
    line-height: 52px;

    @include mq($from: tablet) {
      font-size: 72px;
      line-height: 80px;
      padding-right: 40px;
    }
  }
}
</style>
