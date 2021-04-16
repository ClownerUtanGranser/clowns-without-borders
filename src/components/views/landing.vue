<template>
  <div class="landing">
    <HeroBlock :copy="copy.hero" />
    <CountryBlock :copy="copy.introduction" />
    <MediaBlock />
    <ChapterBlock :copy="copy.chapterOne" />
    <SubChapterBlock :copy="copy.subChapterOne" />
    <ImageQuoteBlock :copy="copy.quoteOne" />
    <MediaBlock />
    <TextBlock :copy="copy.textOne" />
    <ChapterBlock :copy="copy.chapterTwo" />
    <MediaBlock />
    <ImageTextBlock :copy="copy.imageTextOne" />
    <TextBlock :copy="copy.textTwo" />
    <MediaBlock />
    <StatsBlock :copy="copy.statsOne" />
    <ChapterBlock :copy="copy.chapterThree" />
    <MediaBlock />
    <TextBlock :copy="copy.textThree" />
    <ChapterBlock :copy="copy.chapterFour" />
    <ImageTextBlock :copy="copy.imageTextTwo" />
    <MediaBlock />
    <ImageQuoteBlock :copy="copy.quoteTwo" />
    <SubChapterBlock :copy="copy.subChapterTwo" />
    <MediaBlock />
    <SubChapterBlock :copy="copy.subChapterThree" />
    <MediaBlock />
    <SubChapterBlock :copy="copy.subChapterFour" />
    <MediaBlock />
    <ChapterBlock :copy="copy.chapterFour" />
    <StatsBlock :copy="copy.statsTwo" />
    <MediaBlock />
    <TextBlock :copy="copy.textFour" />
    <MediaBlock />
    <StatsBlock :copy="copy.statsThree" />
    <ChapterBlock :copy="copy.chapterFour" />
    <SubChapterBlock :copy="copy.subChapterFive" />
    <MediaBlock />
    <TextBlock :copy="copy.textFive" />
    <TextShapeBlock :copy="copy.textShapeOne" />
    <SubChapterBlock :copy="copy.subChapterSix" />
    <MediaBlock />
    <ImageQuoteBlock :copy="copy.quoteThree" />
    <TextBlock :copy="copy.textSix" />
    <TextShapeBlock :copy="copy.textShapeTwo" />
    <TextBlock :copy="copy.textSeven" />
    <SubChapterBlock :copy="copy.subChapterSeven" />
    <MediaBlock />
    <TextBlock :copy="copy.textEight" />
    <ImageQuoteBlock :copy="copy.quoteFour" />
    <SubChapterBlock :copy="copy.subChapterEight" />
    <MediaBlock />
    <TextBlock :copy="copy.textNine" />
    <TextShapeBlock :copy="copy.textShapeThree" />
    <MediaBlock />
    <ImageTextBlock :copy="copy.imageTextThree" />
    <TextBlock :copy="copy.textTen" />
    <ImageQuoteBlock :copy="copy.quoteFive" />
    <TextBlock :copy="copy.textEleven" />
    <MediaBlock />
    <ChapterBlock :copy="copy.chapterFive" />
    <TextShapeBlock :copy="copy.textShapeFour" />
    <TextBlock :copy="copy.textTwelve" />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import copy from '../../data/copy.json'

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
