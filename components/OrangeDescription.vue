<template>
    <div class="orangeDescription">
        <label><slot/></label>
        <div class="icon-container"> 
            <img :src='image' class="icon">
        </div>
    </div>
</template>

<script>
export default {
  name: 'PictureFrame',
  props: ['title', 'image']
}
</script>

<style scoped>
  .orangeDescription{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
  }

  .icon-container{
    padding: 10px;
    background: orange;
    width: 150px;
    height: 150px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .icon{
    width: 130px;
    height: auto;
  }
</style>
