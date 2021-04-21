<template>
  <kinesis-container event="scroll">
    <div class="media">
      <kinesis-element :strength="75" class="media__purpleCircle" />
      <kinesis-element :strength="25" class="media__yellowCircle" />
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
  </kinesis-container>
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
  position: relative;

  @include mq($from: tablet) {
    padding: 224px 0;
  }

  &__purpleCircle {
    width: 55px;
    height: 55px;
    background-color: color(purple);
    border-radius: 50%;
    position: absolute;
    top: 50px;
    left: -22px;

    @include mq($from: tablet) {
      width: 114px;
      height: 114px;
      left: 114px;
      top: 160px;
    }

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  &__yellowCircle {
    width: 128px;
    height: 128px;
    background-color: color(yellow);
    border-radius: 50%;
    position: absolute;
    bottom: -45px;
    right: -65px;

    @include mq($from: tablet) {
      width: 200px;
      height: 200px;
      bottom: 50px;
      right: 73px;
    }

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
}
</style>
