<template>
  <div class="mediaVideo">
    <div class="mediaVideo__wrapper">
      <iframe
        class="mediaVideo__iframe"
        :src="$props.copy.video + '?controls=0'"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <p v-if="$props.copy.text" class="mediaVideo__text" v-text="$props.copy.text" />
  </div>
</template>

<script>
export default {
  name: 'MediaVideo',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.mediaVideo {
  display: block;
  background-color: color(red);
  position: relative;

  &__wrapper {
    width: calc(100vw - 64px);
    height: 100%;
    max-width: 680px;
    position: relative;

    &:after {
      content: '';
      display: block;
      padding-bottom: 66.62%;
    }
  }

  &__text {
    position: absolute;
    bottom: -29px;
    left: 0px;
    z-index: 10;
    @include body;
    font-style: italic;

    @include mq($from: tablet) {
      font-size: 16px;
      line-height: 29px;
    }
  }

  &__iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
