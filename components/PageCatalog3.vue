<template>
  <div class="test">
    <span />
    <div class="btnContainer" :class="{active: Math.floor(pos) == index}" v-for="(item, index) in list" :key="item"> 
      <div class="btn" @click="click(index)">
        <img :src="list[index]" style="height: 100%" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueCatalog',
  props: ['title', 'list'],
  emits: ['click'],
  data () {
    return {
        pos: 0,
        xPos: 0,
        xOffset: 0,
        timeoutEvt: null,
        status: 'stop',
        scrollEvt: null
    }
  },
  methods: {
    click (index) {
      this.$emit('click', index)
    },
    findRange(num, position) {
        let n = position.length;
        let id = 0;
        let dist = 0;
        if (num < position[0]) {
            id = 0;
        } else if ( num >= position[n-1]) {
            id = n - 1;
        } else {
            for (let i = 0; i < n - 1; i++) {
                if (position[i] <= num && num < position[i+1]) {
                    id = i;
                }
            }
        }
        if(id < n - 1){
            dist = 1 - (position[id + 1] - num) / (position[id + 1] - position[ id ])
            if (dist < 0) {
                dist = 0;
            }
        }
        return id + dist;
    },
    calWeightedSum(array, x) {
        if (x <= 0) { // handle invalid input
            return 0;
        }

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (x >= i + 1) {
            sum += array[i];
            } else {
            sum += array[i] * (x - i);
            break;
            }
        }

        return sum;
    },
    calPosition(){
      const array = document.getElementsByClassName('text-content');
      let posMap = []
      Array.prototype.forEach.call(array, (element, index) => {
          posMap[index] = element.getBoundingClientRect().y + window.scrollY
      })

      return {posMap: posMap}
    },
    setPositionY(){
      let result = this.calPosition();
      let lastKnownScrollPosition = window.scrollY + 200 + 100;

      window.requestAnimationFrame(() => {
          this.pos = this.findRange(lastKnownScrollPosition, result.posMap);
      });
    }
  },
  mounted () {
    this.setPositionY();

    this.scrollEvt = document.addEventListener("scroll", (event) => {
      this.setPositionY();
    });
  },
  unmounted (){
    document.removeEventListener("scroll", this.scrollEvt)
  },
  watch: {
/*       xPos(newValue, oldValue) {
        if (newValue !== oldValue) {
          if(newValue > oldValue) {
              this.status = 'right'
          } else {
              this.status = 'left'
          }
          clearTimeout(this.timeoutEvt)
          this.timeoutEvt = setTimeout(() => {
              this.status = 'stop'
          }, 100);
        }
      }, */
    },
  }
</script>

<style scoped>
  .test{
    position: -webkit-sticky; /* for Safari */
    position: sticky;
    z-index: 0;
    width: 50px;
    max-width: 60px;
    min-width: 60px;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    top: 60px;
    left: 10px; 
    align-self: flex-start;
  }

  .test span{
    position: absolute; 
    width: 4px; 
    height: 100%; 
    background: orange; 
    left: 50%; 
    transform: translateX(-50%)
  }

  @media screen and (min-width: 1025px) {
      .test{
        display: none;
      }
  }
  
  .test .btnContainer{
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .test .btnContainer.active .btn img{
    width: 50px;
    height: auto;
    overflow: hidden;
  }

  .test .btnContainer.active .btn{
    min-width: 70px;
    max-width: 70px;
    max-height: 70px;
    min-height: 70px;
  }

  .test .btn{
    background: orange; 
    border-radius: 50%;  
    padding: 10px;
    display: flex;
    cursor: pointer;
  }

  .test .btn{
    background: orange; 
    border-radius: 50%;  
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .test .btn img{
    width: 0;
    height: auto;
    transition: all .3s ease-out;
  }
</style>
