<template>
  <div class="stats">
    <div class="stats__left">
      <h1 class="stats__heading" v-text="$props.copy.heading" />
      <p
        class="stats__body"
        v-html="$props.copy.body"
        :class="{
          'stats__body-italic': $props.italic,
        }"
      />
      <p v-if="$props.copy.writer" class="stats__body" v-text="$props.copy.writer" />
    </div>
    <div class="stats__right">
      <div
        v-if="$props.copy.list"
        class="stats__circleWrapper"
        :class="{'stats__circleWrapper-two': !$props.copy.list[1].title}"
      >
        <div
          v-for="(item, index) in $props.copy.list"
          :key="index"
          class="stats__circle"
          :class="{'stats__circle-two': !$props.copy.list[1].title, 'hidden': !$props.copy.list[1].title && index === 1, 'hidden2': !$props.copy.list[1].title && index === 2}"
        >
          <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'" :class="{'hidden': !$props.copy.list[1].title && index === 1}">
            <p
              class="stats__countryHeading"
              v-text="item.title"
            />
            <p
              class="stats__countryBody"
              v-if="!$props.bigNumber"
              v-text="item.body"
              :class="{
                'stats__countryBody-big': $props.bigNumber,
              }"
            />
            <p class="stats__countryBody"
               v-if="$props.bigNumber && item.body == 2500"
               :class="{
                'stats__countryBody-big': $props.bigNumber,
              }"
            >{{ count2500 }}</p>
            <p class="stats__countryBody"
               v-if="$props.bigNumber && item.body == 173"
               :class="{
                'stats__countryBody-big': $props.bigNumber,
              }"
            >{{ count173 }}</p>
            <!--
              :class="{
                              'stats__countryBody-big' '': $props.bigNumber,
                            }"

              -->
          </Graphic>
        </div>
      </div>

      <div
        v-if="$props.copy.item"
        class="stats__circleWrapper-one"
      >
        <div
          v-for="(item, index) in $props.copy.item"
          :key="index"
          class="stats__circle"
          :class="'stats__circle-' + index"
        >
          <Graphic :width="'230px'" :height="'230px'" :color="'#CFE7CD'">
            <p
              class="stats__countryHeading"
              v-text="item.title"
            />
            <p
              class="stats__countryBody"
              v-if="!$props.bigNumber"
              v-text="item.body"
              :class="{
                'stats__countryBody-big': $props.bigNumber,
              }"
            />  
            <p class="stats__countryBody"
               :class="{
                'stats__countryBody-big': $props.bigNumber,
              }"
            >{{ count41 }}</p> 
            
                      <!--
              :class="{
                        'stats__countryBody-big': $props.bigNumber,
                      }"
              -->
          </Graphic>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Graphic from '@/components/ui/graphic'

export default {
  name: 'Stats',
  props: {
    copy: Object,
    italic: Boolean,
    bigNumber: Boolean
  },
  components: {
    Graphic
  },
  data() {
    return {
      count41: 0,
      count173: 0,
      count2500: 0,
      observer1: null,
      intersect41: false,
      intersect2500:false
    };
  },
  mounted(){

    this.observer1 = new IntersectionObserver(([entry]) => {
      if(entry && entry.isIntersecting)
      {
        this.intersect41 = true
        this.countTo41()
        this.countTo173()
        this.countTo2500()
      }
      else
      {
        this.intersect41 = false
        this.count41 = 0;
        this.count173 = 0;
        this.count2500 = 0;
      }
    },{
          root: document.querySelector('.num-41'),
          rootMargin: '-15%',
          threshold: 0
        })
    
    this.observer1.observe(this.$el);
  },
  methods: {
    countTo41() {
                        if(this.count41< 41) {
                            setTimeout(() => {
                                this.count41+= 1
                                this.countTo41()
                            }, 70);
                        }
                        else if(this.count41> 41)
                        {
                          this.count41 = 41
                        }

                    },
    countTo173()
    {
                        if(this.count173< 173) {
                            setTimeout(() => {
                              this.count173 += 1
                              this.countTo173()
                            }, 20);
                        }
                        else if(this.count173 > 173)
                        {
                          this.count173 = 173
                        }
    },
    countTo2500()
    {
      if(this.count2500< 2500) 
      {
        setTimeout(() => {
                            this.count2500 += 4
                            this.countTo2500()
                          }, 2);
      }
      else if(this.count2500 > 2500)
      {
        this.count2500 = 2500
      }

    },
    counting41: function (isNumber) 
    {
      return isNumber && this.intersect41;
    }
  }
}
</script>

<style lang="scss">
.stats {
  @include flex-center;
  width: 100%;
  flex-direction: column;
  background-color: color(light-pink);

  @include mq($from: tablet) {
    flex-direction: row;
  }

  &__left,
  &__right {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 32px;
    

    @include mq($from: tablet) {
      width: 50vw;
      min-height: 100vh;
      padding: 0px;
    }
  }

  &__left {
    background-color: color(light-pink);
  }

  &__right {
    background-color: color(beige);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  &__circleWrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 32px;
    justify-content: center;

    @include mq($from: tablet) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
      row-gap: 50px;
    }

    &-one {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0px;
      row-gap: 0px;
    }

    &-two {
      column-gap: 0px;
      row-gap: 0px;
    }
  }

  &__circle {
    overflow: hidden;
    text-align: center;
    @include flex-center;

    &-two {
      &:first-of-type {
        @include mq($until: tablet) {
          margin-bottom: 32px;
        }
      }
    }
  }

  &__countryHeading,
  &__countryBody {
    font-family: 'Marguerite Grotesk';
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: color(red);
    z-index: 2;
    width: calc(100% + 15px);
    color: color(red);
  }

  &__countryBody {
    margin-top: 24px;
    color: black;

    &-big {
      font-size: 50px;
    }
  }

  &__statsHeading {
    text-align: center;
    font-family: 'Marguerite Grotesk';
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: color(red);
    z-index: 2;
    max-width: 191px;
    margin-bottom: 32px;
  }

  &__statsPercentage {
    font-family: 'Marguerite Grotesk';
    color: color(black);
    font-size: 50px;
    line-height: 60px;
    z-index: 2;
  }

  &__circle {
    background-color: color(light-green);
    border-radius: 50%;
    height: 300px;
    width: 300px;
  }

  &__heading {
    font-size: 16px;
    line-height: 29px;
    font-family: 'Marguerite Grotesk';
    color: color(red);
    margin-left: 40px;
    padding-right: 40px;
    text-transform: uppercase;

    @include mq($from: tablet) {
      font-size: 72px;
      line-height: 80px;
    }
  }

  &__body {
    @include body;
    font-size: 16px;
    line-height: 19px;

    @include mq($from: tablet) {
      margin-left: 60px;
      margin-right: 120px;
    }

    &-italic {
      font-family: 'DM Sans italic';
      margin-bottom: 24px;
    }
  }
}

.hidden, .hidden2 {
  display: none;

  @include mq($from: tablet) {
    opacity: 0;
    display: inherit;
  }
}

</style>
