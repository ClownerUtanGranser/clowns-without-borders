<template>
  <div class="media">
    <Carrousel />
  </div>
</template>

<script>
import Carrousel from '@/components/ui/carrousel'

export default {
  name: 'Media',
  components: {
    Carrousel
  }
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
