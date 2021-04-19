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

  &__logo {
    height: 93px;
    width: auto;
  }
}
</style>
