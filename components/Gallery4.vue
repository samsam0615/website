<template>
    <div class="container" style=""> 
        <!-- <label class="font-big" style="font-weight: 600; padding: 0 0 20px 0">2023</label> -->
        <div style="display: flex; height: 300px;">
            <div style="color: white; display: flex; justify-content: space-between; flex-direction: row; width: 100%; flex: 1">
                <div class="imageDisplayer" style="">
                    <img  ref="image" :src="url" style="width: 100%; height: 100%; border: 1px solid white; object-fit: cover; ">
                </div>
            </div>
            <div class="pc" style="width: 100%; height: 450px; padding: 0 20px; ">
                <div class="font-small" style="line-height: 35px;"> 
                    <slot />
                </div>
            </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;">
            <div v-for="image in images" :key="image" 
                class="image-container2" style="aspect-ratio: 4/3; overflow: hidden;" 
                @click="setImage(image)" :class="{active: url == image}">
                <nuxt-img :src="image" style="height: 100%; object-fit: cover;" />
                <div></div>
            </div>
        </div> 
        <div class="mobile" style="width: 100%; padding: 10px;">
            <div class="font-middle" style="color: #6d0e77; font-weight: 600; padding: 10px 0 0px 0;">{{title}}</div>
            <div v-if="subtitle" class="font-small" style="color: #6d0e77; font-weight: 600; padding: 0 0 10px 0;">{{subtitle}}</div>
            <div class="font-mini" style="line-height: 30px;"> 
                <slot />
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'CUHK-iCar',
  props:{
    title: {
        type: String,
        default: "Title"
    },
    subtitle: {
        type: String,
        default: null
    },
    images:{
        type: Array,
        default: function(){
            return ['logo.png', 'logo.png', 'logo.png', 'logo.png', 'logo.png']
        }
    }
  },
  data(){
    return {
        url: null
    }
  },
  methods: {
    setImage (url) {
        this.url = url
    }
  },
  mounted(){
    this.setImage(this.images[0])
  }
}
</script>

<style scoped>

.container{
    display: flex; padding: 20px; width: 100%; flex-direction: column;
    max-width: 1024px;
}




.image-container2 {
    position: relative;
    height: max-content;
    flex-basis: 100%;
    cursor: pointer;
    border: 1px solid white;
    transition: all .1s ease-in-out;
}
.image-container2 img{
    width: 100%;
    height: auto; 
}
.image-container2 div{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    opacity: 0.5;
    z-index: 1;
    top: 0;
    left: 0;
    transition: all .3s ease-in-out;
}
.image-container2:hover{
    transform: scale(1.2);
    z-index: 2;
}

.image-container2:hover div{
    opacity: 0;
}
.image-container2.active div{
    opacity: 0;
}

.imageDisplayer{
    width: 450px; aspect-ratio: 4 / 3; overflow: hidden; max-width: 100%;
}

@media screen and (max-width: 1023px) {
    .imageDisplayer{
        width: 100%;
    }
    .pc{
        display: none;
    }
}

@media screen and (min-width: 1024px) {
    .mobile{
        display: none;
    }
}

</style>
