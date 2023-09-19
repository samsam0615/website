<template>
  <div class="page-catalog2 ">
    <label>{{title}}</label>
    <div style="display: flex; flex-direction: column;  width: 100%; position: relative; padding: 0 20px; ">
        <div style="z-index:1"> 
          <img v-if="status == 'right'" ref='car' src="@/assets/image/materials/iCarR.png" style="position: relative; height: 50px; top: 10px;" :style="{left: xPos + xOffset + 'px'}">
          <img v-if="status == 'left'" ref='car' src="@/assets/image/materials/iCarL.png" style="position: relative; height: 50px; top: 10px;" :style="{left: xPos + xOffset + 'px'}">
          <img v-if="status == 'stop'" ref='car' src="@/assets/image/materials/iCarF.png" style="position: relative; height: 50px; top: 10px;" :style="{left: xPos + xOffset + 'px'}">
        </div>
        <div style="display: flex; flex: 1; flex-direction: row; min-height: 60px; max-height: 60px; width: 100%; position: relative; align-items: flex-end; padding: 0"> 
          <span class="line" ></span>
          <div ref='btnContainer' class="btnContainer" v-for="(item, index) in list" :key="item">
            <div style="display: flex; justify-content: center; align-items: center; position: relative; width: 100%; height: 30px">
                <span class="point" ></span>
            </div>
            <div class="btn" :class="{'active': Math.floor(pos) == index}"  @click="click(index)">
                {{item}}
            </div>
          </div>
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
        scrollEvt: null,
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
      const btnContainer = this.$refs.btnContainer;
      if(!btnContainer[0]){
        return false
      }

      this.xOffset = (btnContainer[0].clientWidth / 2) - this.$refs.car.clientWidth/2;

      let widthMap = []
      Array.prototype.forEach.call(btnContainer, (element, index) => {
          widthMap[index] = element.clientWidth
      })

      let posMap = []
      Array.prototype.forEach.call(array, (element, index) => {
          posMap[index] = element.getBoundingClientRect().y + window.scrollY
      })

      return({posMap: posMap,widthMap: widthMap})
    },
    setPositionX(){
      let result = this.calPosition();
      if(!result) {
        return
      }
      let lastKnownScrollPosition = window.scrollY + 200 + 100 + 30;
      window.requestAnimationFrame(() => {
        this.pos = this.findRange(lastKnownScrollPosition, result.posMap);
        this.xPos = this.calWeightedSum(result.widthMap, this.pos)
      });
    }
  },
  mounted () {
    this.setPositionX();
    this.scrollEvt = document.addEventListener("scroll", (event) => {
        this.setPositionX();
    });
  },
  unmounted (){
    document.removeEventListener("scroll", this.scrollEvt)
  },
  watch: {
      xPos(newValue, oldValue) {
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
      },
    },
  }
</script>

<style scoped>
  .page-catalog2{
    display: flex;
    flex-direction: row;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    top: 60px;
    padding-bottom: 0;
    height: 120px;
    /* background: rgba(200, 200, 200, 0.5); */
    background: white;
    z-index: 10;
  }

  @media screen and (max-width: 1200px) {
    .page-catalog2{
        display: none;
    }
  }


  .page-catalog2 label{
    font-size: 30px;
    font-weight: 600;
    min-width: max-content;
    color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page-catalog2 .btn{
    position: relative;
    height: 30px;
    width: 100%;
    color: #7c7c7c;
    font-size: 17px;
    width: max-content;
    cursor: pointer;
  }

  .page-catalog2 .btn a{
    display: flex;
    flex-direction: column;
    width: max-content;
  }

  .page-catalog2 .btn.active{
    color: #5b2700;
  }

  .page-catalog2 .btn:hover{
    color: orange;
  }

  .page-catalog2 .btnContainer{
    display: flex; 
    flex-direction: column; 
    justify-content: flex-end; 
    align-items: center;
    flex-basis: 100%;
  }

  .page-catalog2 .point{
    background: orange; padding: 10px; border-radius: 50%
  }

  .page-catalog2 .line{
    background: orange; padding: 4px; width: 100%; position: absolute; border-radius: 4px; top: 11px
  }
</style>
