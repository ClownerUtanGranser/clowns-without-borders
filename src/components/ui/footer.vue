<template>
  <footer class="footer">
    <img class="footer__logo" src="@/assets/images/circus-school-logo.svg" />
    <img class="footer__logo" src="@/assets/images/albaled-logo.svg" />
    <img class="footer__logo" src="@/assets/images/clown-me-in-logo.svg" />
    <img class="footer__logo" src="@/assets/images/fba-logo.svg" />
    <img class="footer__logo" src="@/assets/images/logo.svg" />
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.footer {
  min-height: 300px;
  width: 100%;
  background-color: color(white);
  @include flex-center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 32px;

  &__logo {
    margin: 16px;

    @include mq($until: tablet) {
      max-width: 300px;
    }

    &:nth-of-type(1) {
      width: 172px;
      height: 138px;
    }

    &:nth-of-type(2) {
      width: 154px;
      height: 143px;
    }

    &:nth-of-type(3) {
      width: 233px;
      height: 93px;
    }

    &:nth-of-type(4) {
      width: 201px;
      height: 123px;
    }

    &:nth-of-type(5) {
      width: 390px;
      height: 51px;
    }
  }
}
</style>
