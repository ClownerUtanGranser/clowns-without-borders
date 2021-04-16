<template>
  <div class="landing">
    <TextBlock :copy="copy.textSix" />
  </div>
</template>

<script>
import copy from '../../data/copy.json'
import TextBlock from '@/components/blocks/textBlock'

export default {
  name: 'Landing',
  components: {
    TextBlock
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
