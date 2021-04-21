<template>
  <div class="landing">
    <HeroBlock :copy="copy.hero" />
    <CountryBlock :copy="copy.introduction" />
    <MediaBlock :copy="copy.mediaOne" />
    <ChapterBlock :copy="copy.chapterOne" />
    <SubChapterBlock :copy="copy.subChapterOne" />
    <ImageQuoteBlock :copy="copy.quoteOne" :flipped="true" />
    <MediaBlock :copy="copy.mediaOne" />
    <TextBlock :copy="copy.textOne" />
    <ChapterBlock :copy="copy.chapterTwo" />
    <MediaBlock :copy="copy.mediaOne" />
    <ImageTextBlock :copy="copy.imageTextOne" />
    <TextBlock :copy="copy.textTwo" />
    <MediaBlock :copy="copy.mediaFour" />
    <StatsBlock :copy="copy.statsOne" :italic="true" />
    <ChapterBlock :copy="copy.chapterThree" />
    <MediaBlock :copy="copy.mediaOne" />
    <TextBlock :copy="copy.textThree" />
    <ChapterBlock :copy="copy.chapterFour" :smallerText="true" />
    <ImageTextBlock :copy="copy.imageTextTwo" />
    <MediaBlock :copy="copy.mediaOne" />
    <ImageQuoteBlock :copy="copy.quoteTwo" :flipped="true" :bigText="true"/>
    <SubChapterBlock :copy="copy.subChapterTwo" />
    <MediaBlock :copy="copy.mediaOne" />
    <SubChapterBlock :copy="copy.subChapterThree" />
    <MediaBlock :copy="copy.mediaOne" />
    <SubChapterBlock :copy="copy.subChapterFour" />
    <MediaBlock :copy="copy.mediaOne" />
    <ChapterBlock :copy="copy.chapterFive" />
    <StatsBlock :copy="copy.statsTwo" />
    <MediaBlock :copy="copy.mediaOne" />
    <TextBlock :copy="copy.textFour" />
    <MediaBlock :copy="copy.mediaOne" />
    <StatsBlock :copy="copy.statsThree" />
    <ChapterBlock :copy="copy.chapterSix" />
    <SubChapterBlock :copy="copy.subChapterFive" />
    <MediaBlock :copy="copy.mediaOne" />
    <TextBlock :copy="copy.textFive" />
    <ImageTextBlock :copy="copy.imageTextFive" />
    <TextBlock :copy="copy.textFourteen" />
    <TextShapeBlock :copy="copy.textShapeOne" />
    <SubChapterBlock :copy="copy.subChapterSix" />
    <MediaBlock :copy="copy.mediaOne" />
    <ImageQuoteBlock :copy="copy.quoteThree" :flipped="true" :bigText="true"/>
    <TextBlock :copy="copy.textSix" />
    <ImageTextBlock :copy="copy.imageTextThree" />
    <TextBlock :copy="copy.textThirteen" />
    <TextShapeBlock :copy="copy.textShapeTwo" />
    <TextBlock :copy="copy.textSeven" />
    <SubChapterBlock :copy="copy.subChapterSeven" />
    <MediaBlock :copy="copy.mediaOne" />
    <TextBlock :copy="copy.textEight" />
    <ImageQuoteBlock :copy="copy.quoteFour" :flipped="true" :bigText="true"/>
    <SubChapterBlock :copy="copy.subChapterEight" />
    <MediaBlock :copy="copy.mediaOne" />
    <TextBlock :copy="copy.textNine" />
    <TextShapeBlock :copy="copy.textShapeThree" />
    <MediaBlock :copy="copy.mediaOne" />
    <ImageTextBlock :copy="copy.imageTextSix" />
    <TextBlock :copy="copy.textTen" />
    <ImageQuoteBlock :copy="copy.quoteFive" :flipped="true" />
    <TextBlock :copy="copy.textEleven" />
    <ImageTextBlock :copy="copy.imageTextFour" :flipped="true" />
    <ChapterBlock :copy="copy.chapterSeven" />
    <TextShapeBlock :copy="copy.textShapeFive" />
    <TextBlock :copy="copy.textTwelve" />
    <Footer />
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
import Footer from '@/components/ui/footer'

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
    TextShapeBlock,
    Footer
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
