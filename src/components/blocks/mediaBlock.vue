<template>
  <div class="media">
    <Carrousel
      v-if="$props.copy.videos && $props.copy.videos.length >= 2"
      v-bind="$props"
    />
    <MediaVideo v-else-if="$props.copy.videos && $props.copy.videos.length === 1" />
    <MediaImage v-else-if="$props.copy.image" />
  </div>
</template>

<script>
import Carrousel from '@/components/ui/carrousel'
import MediaVideo from '@/components/ui/mediaVideo'
import MediaImage from '@/components/ui/mediaImage'

export default {
  name: 'Media',
  components: {
    Carrousel,
    MediaVideo,
    MediaImage
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
  background: linear-gradient(to left, color(beige) 50%, color(light-pink) 50%);
}
</style>
