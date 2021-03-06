<template>
  <div class="carrousel">

    <swiper v-if="$props.copy.videos" ref="carrousel" :options="swiperOptions" class="carrousel__container">
      <swiper-slide v-for="(item, index) in $props.copy.videos" :key="index">
        <div class="carrousel__item">
          <iframe
            class="carrousel__iframe"
            :src="item.src + '?controls=0'"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </swiper-slide>
    </swiper>

    <swiper v-else ref="carrousel" :options="swiperOptions" class="carrousel__container">
      <swiper-slide v-for="(item, index) in $props.copy.images" :key="index">
        <div class="carrousel__item">
          <img class="carrousel__iframe" :src="imgSrc(index)" />
        </div>
      </swiper-slide>
    </swiper>

    <div class="carrousel__prev" slot="button-prev" @click="onClickPrev" />
    <div class="carrousel__next" slot="button-next" @click="onClickNext" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'carrousel',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    copy: Object
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        keyboard: {
          enabled: true,
        },
        lazy: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.carrousel.$swiper
    }
  },
  methods: {
    onClickNext: function () {
      this.$refs.carrousel.$swiper.slideNext()
    },
    onClickPrev: function () {
      this.$refs.carrousel.$swiper.slidePrev()
    },
    imgSrc: function (index) {
      return this.$props.copy.images ? require('@/assets/images/' + this.$props.copy.images[index].src) : '@/assets/images/dummy-img.png'
    }
  }
}
</script>

<style lang="scss">
$margin: 50px;
$arrow-width: 18px;
$arrow-height: 32px;

.carrousel {
  width: 100vw;
  height: 100%;
  position: relative;

  @include mq($from: tablet) {
    width: calc(680px + calc(#{$margin} * 4) + calc(#{$arrow-width} * 2));
  }

  &__container {
    width: 100vw;
    height: 100%;

    @include mq($from: tablet) {
      width: 680px;
      height: 453px;
    }
  }

  &__item {
    background-color: color(red);
    @include flex-center;
    text-align: center;
    width: 100%;
    height: 100%;

    &:after {
      content: '';
      display: block;
      padding-bottom: 66.62%;
    }

    p {
      margin: 0 auto;
    }
  }

  &__text {
    position: absolute;
    z-index: 1000;
    left: 50px;
    top: 50px;
  }

  &__iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &__next,
  &__prev {
    height: $arrow-height;
    width: $arrow-width;
    background-color: color(green);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10000;
    background: url('~@/assets/images/arrow.svg');

    &:hover {
      cursor: pointer;
    }

    @include mq($until: tablet) {
      display: none;
    }
  }

  &__prev {
    left: $margin;
  }

  &__next {
    right: $margin;
    transform: rotate(180deg);
  }
}

.swiper-slide-prev,
.swiper-slide-next {
  // opacity: 0;
  pointer-events: none;
  user-select: none;
  z-index: -1;
}
</style>
