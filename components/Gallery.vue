<template>
    <div style="display: flex; padding: 20px; width: 1024px; flex-direction: column;"> 
        <label class="font-big" style="font-weight: 600; padding: 0 0 20px 0">2023</label>
        <div style="display: flex; height: 350px;">
            <div style="color: white; display: flex; justify-content: space-between; flex-direction: row; ">
                <div style="height: 350px">
                    <img ref="image" :src="url" style="height: 100%; width: auto; border: 1px solid white">
                </div>
            </div>
            <div style="width: 100%; height: 450px; padding: 0 20px">
                <div class="font-big" style="color: #6d0e77; font-weight: 600; padding: 0 0 10px 0">危機解除工作坊 2023</div>
                <div class="font-small" style="line-height: 30px;"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proidentm.
                </div>
            </div>

        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;">
            <!-- <div class="image-container2" @click="setImage('event1.jpg')" :class="{active: url == 'event1.jpg'}">
                <img src="event1.jpg">
                <div></div>
            </div> -->
            <div class="image-container2" @click="setImage('event4.jpg')" :class="{active: url == 'event4.jpg'}">
                <nuxt-img src="event4.jpg" />
                <div></div>
            </div>
            <div class="image-container2" @click="setImage('event3.jpg')" :class="{active: url == 'event3.jpg'}">
                <nuxt-img src="event3.jpg" />
                <div></div>
            </div>
            <div class="image-container2" @click="setImage('event3.jpg')" :class="{active: url == 'event3.jpg'}">
                <nuxt-img src="event3.jpg" />
                <div></div>
            </div>
            <div class="image-container2" @click="setImage('event3.jpg')" :class="{active: url == 'event3.jpg'}">
                <nuxt-img src="event3.jpg" />
                <div></div>
            </div>
        </div> 
    </div>

</template>

<script>
export default {
  name: 'CUHK-iCar',
  data(){
    return {
        url: 'event4.jpg'
    }
  },
  methods: {
    setImage (url) {
        this.url = url
    }
  }
}
</script>

<style scoped>
.banner{
    width: 100%; 
    height: 300px; 
    top: 0;
    overflow: hidden; 
    position: relative
}
.banner img {
    width: 100%;
    top: 100px;
    object-position: 0 -200px
}
.banner .title{
    color: #6d0e77; 
    font-size: 50px; 
    font-weight: 800; 
    position: absolute; 
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
}

/* .image-container{
    position: relative;
    width: 33%;
}
.image-container img{
    width: 100%; border: 1px solid white
}
.image-container div{
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
.image-container:hover div{
    opacity: 0;
}
 */
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
/* .image-container2:not(:hover) {
    z-index: -1;
} */
.image-container2:hover div{
    opacity: 0;
}
.image-container2.active div{
    opacity: 0;
}
/* .image-container2.active{
    border: 5px solid #6d0e77
} */


</style>
