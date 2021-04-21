<template>
  <div class="media">
    <Carrousel
      v-if="$props.copy.videos || $props.copy.images"
      v-bind="$props"
    />
    <MediaVideo
      v-else-if="$props.copy.video"
      v-bind="$props"
    />
    <MediaImage
      v-else-if="$props.copy.img"
      v-bind="$props"
    />
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
  @include flex-center;
  padding: 96px 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, color(beige) 50%, color(light-pink) 50%);

  @include mq($from: tablet) {
    padding: 224px 0;
  }
}
</style>
