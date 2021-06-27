<template>
  <!-- <div v-on:click="goto" class="navigation">
      CASPAR {{ copy.hero.heading }}
  </div> -->
  <div>
    <section v-on:click="openClose" class="navboxStripes">
      <p class="navStripes" v-bind:class="[ openNav ? 'turned' : '']"></p>
      <p class="navStripes" v-bind:class="[ openNav ? 'turned' : '']"></p>
      <p class="navStripes" v-bind:class="[ openNav ? 'turned' : '']"></p>
    </section>
    <section v-if="openNav" v-on:click="openClose" class="overlay" >
            <ul>
              <li class="nav-li" v-on:click="goto('#chapter-0')" >{{ copy.hero.heading }}</li>
              <li class="nav-li" v-on:click="goto('#chapter-1')" >{{ copy.chapterOne.heading }}</li>
              <li class="nav-li" v-on:click="goto('#chapter-2')" >{{ copy.chapterTwo.heading }}</li>
              <li class="nav-li" v-on:click="goto('#chapter-3')" >{{ copy.chapterThree.heading }}</li>
              <li class="nav-li" v-on:click="goto('#chapter-4')" >{{ copy.chapterFour.heading }}</li>
              <li class="nav-li" v-on:click="goto('#chapter-5')" >{{ copy.chapterFive.heading }}</li>
              <li class="nav-li" v-on:click="goto('#chapter-6')" >{{ copy.chapterSix.heading }}</li>
              <li class="nav-li" v-on:click="goto('#chapter-7')" >{{ copy.chapterSeven.heading }}</li>
            </ul>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Navigation',
  props: {
    copy: Object
  },
    data(){
        return{
            classOpen : "navStripes",
            openNav: false 
            
              }
          },
  methods: {
    goto : function(chapter)
    {
      let el = document.querySelector(chapter);
      el.scrollIntoView();
      
      
    },

    openClose : function()
    {
        this.openNav = !this.openNav;
      
    }

  }
}



</script>
<style lang="scss">

.navboxStripes
{
    position: fixed;
    top: 1rem;
    left: 20px;
    padding: 0 0 0 0;
    cursor: pointer;
    z-index: 10;

    .navStripes
    {
        width: 3rem;
        height: 5px;
        background: white;
        border-radius: 5px;
        margin-top: 5px;
        border: solid #777 1px;

        transition: transform 1s , opacity 1s;

        &.turned
        {

            &:nth-child(1)
            {
                transform: rotate(-45deg) translate(-19px, 7px);
            }

            &:nth-child(2)
            {
                transform: rotate(45deg) translate(-0px, 11px);
            }

            &:nth-child(3)
            {
                opacity: 0;
            }
        }
    
    }    
}

.overlay
{
  position: fixed;
  z-index: 5;
  top:0;
  bottom: 0;
  left:0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#667, .9);
  border: solid 2px black;

  animation: 1s ease-out 0s 1 fadein;

  ul
  {
    list-style-type: upper-roman;
    margin-top: 2rem;
    
  }

  .nav-li
  {
    color:#fff;
    font-size: 2rem;
    font-weight: 5rem;
    margin-bottom: 1rem;
    padding: 1rem 1rem 0rem 1rem;
    cursor: pointer;
  }
}

@media screen and (max-width: 1024px) {

.overlay
{
  justify-content:center;
  align-items: start;
    ul
    {
      margin: 4rem 0rem 0rem 4rem;
    }
    .nav-li {
      
      width: 80%;
      font-size: 2rem;
      font-weight: 2rem;
      margin: 0rem 0.5rem 0.5rem 0.5rem;
      padding: 0rem 0rem 0rem 0rem;
    }
  }
}

@media screen and (max-width: 736px) 
{
  .overlay
  {
     
    .nav-li 
    {
      
      width: 80%;
      font-size: 1.2rem;
      font-weight: 1.2rem;
      margin: 0rem 0.5rem 0.5rem 0.5rem;
      padding: 0rem 0rem 0rem 0rem;
    }
  }
}

@media screen and (max-width: 375px) 
{
  .overlay
  {

    ul
    {
      margin: 2rem 0rem 0rem 4rem;
    }
     
    .nav-li 
    {
      
      width: 80%;
      font-size: 1rem;
      font-weight: 1.2rem;
      margin: 0rem 0.5rem 0.5rem 0rem;
      padding: 0rem 0rem 0rem 0rem;
    }
  }
}



@keyframes fadein 
{
  from { opacity: 0}
  to   { opacity: 1}  
}

</style>
