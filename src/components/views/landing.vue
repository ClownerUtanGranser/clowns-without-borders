<template>
  <div class="landing">
    <HeroBlock />
    <CountryBlock />
    <MediaBlock />
    <ChapterBlock />
    <SubChapterBlock />
    <ImageQuoteBlock />
    <TextBlock />
    <ImageTextBlock />
    <StatsBlock />
    <TextShapeBlock />
  </div>
</template>

<script>
import HeroBlock from '@/components/blocks/heroBlock'
import CountryBlock from '@/components/blocks/countryBlock'
import MediaBlock from '@/components/blocks/mediaBlock'
import ChapterBlock from '@/components/blocks/chapterBlock'
import SubChapterBlock from '@/components/blocks/subChapterBlock'
import ImageQuoteBlock from '@/components/blocks/imageQuoteBlock'
import TextBlock from '@/components/blocks/textBlock'
import ImageTextBlock from '@/components/blocks/imageTextBlock'
import StatsBlock from '@/components/blocks/statsBlock'
import TextShapeBlock from '@/components/blocks/textShapeBlock'

export default {
  name: 'Landing',
  components: {
    HeroBlock,
    CountryBlock,
    MediaBlock,
    ChapterBlock,
    SubChapterBlock,
    ImageQuoteBlock,
    TextBlock,
    ImageTextBlock,
    StatsBlock,
    TextShapeBlock
  }
}
</script>

<style lang="scss">
.landing {
  height: auto;
  width: 100%;
}
</style>
