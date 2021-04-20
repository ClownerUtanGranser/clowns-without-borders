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
  height: 300px;
  width: 100%;
  background-color: color(white);
  @include flex-center;
  justify-content: space-around;

  &__logo {
    height: 93px;
    width: auto;

    &:nth-of-type(1) {
      width: 11.94%
    }

    &:nth-of-type(2) {
      width: 10.694%;
    }

    &:nth-of-type(3) {
      width: 16.18%;
    }

    &:nth-of-type(4) {
      width: 13.9583%;
    }

    &:nth-of-type(5) {
      width: 27.083%;
    }
  }
}
</style>
