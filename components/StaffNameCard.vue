<template>
    <div class="staff-container" >
        <div class="staff-image-container">
            <img :src="image">
        </div>
        <div class="staff-description-container">
            <label class="subTitle staffSubTitle font-middle" :style="{ 'border-bottom': '3px solid ' + color }">
                {{title}}
                <a :href="youtube" target="_blank"><img src='/image/youtube.png' v-if="youtube"></a>
            </label>
            <div class="description" >
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: ['title', 'image', 'color', 'youtube'],
  methods:{
  }
}
</script>

<style scoped>
.staff-container{
    position: relative;
    display: flex;
    flex-basis: 450px;
    margin: 20px;
    padding: 20px 10px;

    flex-direction: column; align-items: center; background: #f3f3f3;
}

.staff-container.reverse{
    flex-direction: row-reverse;
}

.staff-description-container{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    align-items: center; width: 90%
}

.staff-image-container{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    display: relative;
    z-index: 1;
    height: 250px;
    width: 250px;
}

.staff-image-container img{
    margin: auto;
    border-radius: 50%;
    width: 100%;
    height: auto;
}

.popup-box-container{
    width: 60vw;
    height: 70vh;
    position: fixed;
    background-color: rgba(81, 00, 243, 0.9);
    border-radius: 5vw;
    padding: 5vw 5vw;
    display: flex;
    justify-content: space-between;
    color: white;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);

    visibility: hidden;
    opacity: 0;
    transition: 0.6s;
    z-index: 2;
}

.visible{
    left:50%;
    visibility: visible;
    opacity: 1;
    transform: (-50%, 50%) scale(1);
}

.subDescription{
    font-size: 22px;
}

.description{
    width: 100%;
    overflow-wrap: break-word;
    font-size: 17px;
    padding: 20px 0 0 0;
    line-height: 30px;
}

.popup-box-description-container2 .description{
    width: 50%;
    overflow-wrap: break-word;
    font-size: 1.3vw;
}

.staffSubTitle{
    display: flex;justify-content: center;  width: 70%;
    white-space: nowrap;
}

@media screen and (max-width: 768px) {
    .staff-container{
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 25px;
    }
    .staff-container.reverse{
        flex-direction: column;
    }
    .staff-image-container{
        justify-content: center;
    }
    .staff-image-container img{
        width: 80%;
    }
    .staff-description-container{
        width: 100%;
    }
    .subDescription{
        font-size: 21px;
    }
    .description{
        font-size: 18px;
    }
}
</style>