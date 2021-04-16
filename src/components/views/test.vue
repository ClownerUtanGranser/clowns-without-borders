<template>
  <div class="landing">
    <ImageTextBlock :copy="copy.imageTextOne" />
  </div>
</template>

<script>
import copy from '../../data/copy.json'
import ImageTextBlock from '@/components/blocks/imageTextBlock'

export default {
  name: 'Landing',
  components: {
    ImageTextBlock
  },
  data () {
    return {
      copy
    }
  }
}
</script>

<style lang="scss">
.landing {
  height: auto;
  width: 100%;
}
</style>
