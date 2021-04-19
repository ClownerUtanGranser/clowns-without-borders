<template>
  <div class="carrousel">
    <swiper ref="carrousel" :options="swiperOptions" class="carrousel__container">
      <swiper-slide>
        <div class="carrousel__item">
          <p> swiper 1 </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carrousel__item">
          <p> swiper 2 </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carrousel__item">
          <p> swiper 3 </p>
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
  data() {
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
    swiper() {
      return this.$refs.carrousel.$swiper
    }
  },
  methods: {
    onClickNext: function () {
      this.$refs.carrousel.$swiper.slideNext()
    },
    onClickPrev: function () {
      this.$refs.carrousel.$swiper.slidePrev()
    }
  }
}
</script>

<style lang="scss">
$margin: 50px;
$arrow-width: 18px;
$arrow-height: 32px;

.carrousel {
  width: calc(680px + calc(#{$margin} * 4) + calc(#{$arrow-width} * 2));
  height: 453px;
  position: relative;

  &__container {
    width: 680px;
    height: 453px;
  }

  &__item {
    background-color: color(red);
    @include flex-center;
    text-align: center;
    width: 100%;
    height: 100%;

    p {
      margin: 0 auto;
    }
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
