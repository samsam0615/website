<template>
  <div class="upcounter-container" ref="upcounter">
    <div style="width: 60px; height: 60px; display: flex"> 
        <img :src='image' style="width: 60px; object-fit: contain;">
    </div>
    <label class="font-small">{{text1}}</label>
    <span class="font-big">{{Math.floor(value)}}</span>
    <label class="font-small">{{text2}}</label>
  </div>
</template>

<script>

export default {
  name: 'UpCounter',
  props: ['image', 'text1', 'text2', 'number'],
  data: () => ({
    counterStatus: false,
    event: null,
    value: 0,
  }),
  components:{
    
  },
  methods:{
    startCounter(){
        let dist = window.innerHeight - this.$refs.upcounter.getBoundingClientRect().top;
        // console.log(dist, window.innerHeight - this.$refs.upcounter.getBoundingClientRect().top)
        if(dist >= 0){
            // console.log('dist >= 0')
            if(this.counterStatus == false){
                this.counterStatus = true;
                console.log('start conter')

                const max = this.number;
                const frameTo = 8;
                const interval = max / frameTo;
                let timer = setInterval(() => {
                    if(this.value < this.number) {
                        if(this.value + interval >= max) {
                            this.value = max
                            // cancel interval
                            clearInterval(timer)
                        } else {
                            this.value += interval
                        }
                    }
                }, 125)
            }
        }
    }
  },
  mounted(){
    this.startCounter()
    this.event = document.addEventListener('scroll', (e)=>{
        if(this.$refs.upcounter){
            this.startCounter();
        }
    })
  },
  unmounted(){
    document.removeEventListener('scroll', this.event)
  }
}
</script>

<style scoped>

.upcounter-container-wrapper{
    display: flex;
    width: 100%;
    height: 100%;
    padding: 5px 5px;
    flex-basis: 20%;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
}

.upcounter-container{
    background-color: gainsboro;
    width: 180px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.upcounter-container span{
    color: orange;
}

.upcounter-container label{
}

@media screen and (max-width: 1199.9px) {
    .upcounter-container{
        flex-basis: 49%;
        max-width: 200px;
        max-height: 200px;
    }
    .upcounter-container span{
        font-size: 35px;
        color: orange;
    }
    .upcounter-container label{
        font-size: 18px;
    }
    .upcounter-container-wrapper{
        padding: 0;
    }
    .upcounter-container{
    }
}
</style>
