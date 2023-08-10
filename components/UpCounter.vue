<template>
  <div class="upcounter-container">
    <div  style="width: 60px; height: 60px; display: flex"> 
        <img :src='image' style="width: 60px; object-fit: contain;">
    </div>
    <label>{{text1}}</label>
    <span>{{number}}</span>
    <label>{{text2}}</label>
  </div>
</template>

<script>
export default {
  name: 'UpCounter',
  props: ['image', 'text1', 'text2', 'number']
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
    width: 200px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.upcounter-container span{
    font-size: 40px;
    color: orange;
}

.upcounter-container label{
    font-size: 20px;
}

@media screen and (max-width: 1200px) {
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
