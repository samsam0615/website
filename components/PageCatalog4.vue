<template>
    <div class="container" >
        <div style="display: flex; gap: 10px; width: 1200px;">
            <span :class="{active: Math.floor(pos) == 0, inactive: Math.floor(pos) != 0}">iPort是甚麼？</span>
            <span :class="{active: Math.floor(pos) == 1, inactive: Math.floor(pos) != 1}">如何使用iPort？</span>
            <span :class="{active: Math.floor(pos) == 2, inactive: Math.floor(pos) != 2}">警報系統</span>
            <span :class="{active: Math.floor(pos) == 3, inactive: Math.floor(pos) != 3}">手勢控制小車</span>
            <span :class="{active: Math.floor(pos) == 4, inactive: Math.floor(pos) != 4}">聲控開關</span>
            <span :class="{active: Math.floor(pos) == 5 || Math.floor(pos) == 6, inactive: Math.floor(pos) != 5 && Math.floor(pos) != 6}">其他實驗</span>
        </div>
    </div>
</template>

<style scoped>
    .container{
        width: 100%; 
        display: flex; 
        justify-content: center;
        gap: 10px; 
        top: 60px; 
        position: sticky; 
        padding: 20px 0; 
        background: white; 
        z-index: 1
    }

    .container span {
        height: min-content; 
        flex-basis: 100%; 
        display: flex; 
        justify-content: center; 
        line-height: 35px;
        border-bottom: 10px solid #c1c1c1; 
        color: #c1c1c1;
        font-size: 20px;
        font-weight: 600;
        transition: all .3s ease-in-out;
    }

    .container span:nth-child(1){
        border-bottom: 10px solid #39499f; color: #39499f;
    }
    
    .container span:nth-child(2){
        border-bottom: 10px solid #f16465; color: #f16465;
    }

    .container span:nth-child(3){
        border-bottom: 10px solid #383838; color: #383838;
    }

    .container span:nth-child(4){
        border-bottom: 10px solid #2db34a; color: #2db34a;
    }
    
    .container span:nth-child(5){
        border-bottom: 10px solid #7c3218; color: #7c3218;
    }

    .container span:nth-child(6){
        border-bottom: 10px solid #47c7ea; color: #47c7ea;
    }

    .inactive{
        border-bottom: 10px solid #c1c1c1 !important; 
        color: #c1c1c1 !important;
    }

    .active {
        font-size: 22px !important;
    }

    @media screen and (max-width: 1200px) {
        .container{
            display: none;
        }
    }
</style>

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
    },
  }
</script>
