<template>
  <div class="video">
    <iframe
      class="video__iframe"
      :src="$props.copy.videos[0].src + '?controls=0'"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: {
    copy: Object
  }
}
</script>

<style lang="scss">
.video {
  width: 680px;
  height: 453px;
  background-color: color(red);

  &__iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
