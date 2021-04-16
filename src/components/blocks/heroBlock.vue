<template>
  <div class="hero">
    <img src="@/assets/images/hero.jpg" class="hero__img" />
    <div class="hero__wrapper">
      <h1 v-text="$props.copy.heading" />
      <p v-text="$props.copy.body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #3DB96D;
  color: color(white);

  &__wrapper {
    position: absolute;
    left: 50%;
    max-width: 693px;
  }

  &__img {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: none;
  }
}
</style>
