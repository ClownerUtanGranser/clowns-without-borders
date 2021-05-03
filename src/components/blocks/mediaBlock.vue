<template>
  <kinesis-container event="scroll">
    <div class="media">
      <kinesis-element :strength="purpleCircleSpeed" class="media__purpleCircle" />
      <kinesis-element :strength="yellowCircleSpeed" class="media__yellowCircle" />
      <Carrousel
        v-if="$props.copy.videos || $props.copy.images"
        v-bind="$props"
      />
      <MediaVideo
        v-else-if="$props.copy.video"
        v-bind="$props"
      />
      <MediaImage
        v-else
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
  },
  computed: {
    yellowCircleSpeed: function () {
      if (window.innerWidth <= 768) {
        return 25
      } else {
        return 100
      }
    },
    purpleCircleSpeed: function () {
      if (window.innerWidth <= 768) {
        return 50
      } else {
        return 250
      }
    }
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
  z-index: -1;

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
      width: 115px;
      height: 115px;
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
    width: 125px;
    height: 125px;
    background-color: color(yellow);
    border-radius: 50%;
    position: absolute;
    bottom: 20px;
    right: -30px;

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
