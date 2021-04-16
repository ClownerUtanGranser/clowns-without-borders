<template>
  <div class="media">
    <p>Media Block</p>
  </div>
</template>

<script>
export default {
  name: 'Media'
}
</script>

<style lang="scss">
.media {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: color(light-green);
}
</style>
