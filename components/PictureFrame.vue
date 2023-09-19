<template>
  <div class="picture-frame-container">
    <div class="description-image-container">
      <img :src='image' >
    </div>
    <div class="title">
      <label>{{title}}</label>
    </div>
    <div class="overlay">
      <div class="text">
        <slot/>
      </div>
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

.picture-frame-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 20px;
  background-color: white;
  width: 300px;
  min-width: 300px;
  height: 300px;
  min-height: 300px;
  max-height: 40vw;
  padding: 0 0;
  /* background: blue; */
}

.picture-frame-container img{
  display: block;
  width: 100%;
  max-width: 80%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 1px 1px rgba(40, 40, 40, 0.5);
  z-index: -999;
  margin: auto;
}

.description-box-title{
  padding: 0 0 25px;
}

.description-box-title label{
  font-size: 30px;
}

.description-container-wrapper{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.picture-frame-container .title{
  display: flex;
  align-items: center;
  padding-top: 30px;
}

.picture-frame-container .title label{
    font-size: 25px;
}



.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: white;
  cursor: default;
  display: flex;
  text-align: center;
  justify-self: center;
  border-radius: 20w;
}

.overlay div {
  color: black;
  font-size: 25px;
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: flex;
  text-align: center;
  justify-self: center;
  z-index: 999;
}

.overlay span{
    display: flex;
    text-align: center;
    justify-self: center;
}

.description-container:hover .overlay {
    opacity: 0.8;
}

.picture-frame-container:hover .overlay{
    opacity: 0.8;
    border-radius: 20px;
}


@media screen and (max-width: 400px) {
  .picture-frame-container{
    width: 250px;
    min-width: 250px;
    height: 250px;
    min-height: 250px;
    /* background: blue; */
  }
}
</style>
