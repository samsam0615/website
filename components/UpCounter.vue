<template>
  <div class="upcounter-container">
    <div style="width: 60px; height: 60px; display: flex"> 
        <img :src='image' style="width: 60px; object-fit: contain;">
    </div>
    <label class="font-small">{{text1}}</label>
    <!-- <vue3-count-to :startVal='0' :endVal='number' :duration='4000' :autoplay='false' ref="upcounter" /> -->
    <span class="font-big">{{number}}</span>
    <label class="font-small">{{text2}}</label>
  </div>
</template>

<script>

export default {
  name: 'UpCounter',
  props: ['image', 'text1', 'text2', 'number'],
  data: () => ({
    counterStatus: false,
    event: null
  }),
  components:{
    
  },
  methods:{
    startCounter(){
        let self = this;
        let dist = window.innerHeight - self.$refs.upcounter.$el.getBoundingClientRect().top;
        if(dist > 0){
            if(self.counterStatus == false){
                self.$refs.upcounter.start();
                self.counterStatus = true;
            }
        }
    }
  },
  mounted(){
/*     let self = this
    this.startCounter();
    this.event = document.addEventListener('scroll', (e)=>{
        if(self.$refs.upcounter){
            this.startCounter();
        }
    }) */
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
