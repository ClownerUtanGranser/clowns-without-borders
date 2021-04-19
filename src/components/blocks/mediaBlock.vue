<template>
  <div class="media">
    <Carrousel
      v-if="$props.copy.videos && $props.copy.videos.length >= 2"
      v-bind="$props"
    />
    <Video v-else-if="$props.copy.videos && $props.copy.videos.length === 1" />
    <Image v-else-if="$props.copy.image" />
  </div>
</template>

<script>
import Carrousel from '@/components/ui/carrousel'
import Video from '@/components/ui/video'
import Image from '@/components/ui/image'

export default {
  name: 'Media',
  components: {
    Carrousel,
    Video,
    Image
  },
  props: {
    copy: Object
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
