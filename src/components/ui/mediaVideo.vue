<template>
  <div class="mediaVideo">
    <div class="mediaVideo__wrapper">
      <iframe
        class="mediaVideo__iframe"
        :src="$props.copy.videos[0].src + '?controls=0'"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
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

  &__iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
