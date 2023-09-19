<template>
  <div class="card-wrapper" onclick="">
    <div class="card">
        <div class="text-overlay">
          <label class="back-h2">{{title}}</label>
          <span class="material-symbols-outlined">{{symbol}}</span>
        </div>
        <div class="purchase-button-container">
        <span>
          <slot/>
        </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureCard',
  props: ['title', 'symbol', 'text']
}
</script>

<style>
.card-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  cursor: default;
}

.card-wrapper:hover .card {
  transform: rotateY(179deg);
  -webkit-transform: rotateY(179deg);
  z-index: 2;
}
.card-wrapper:hover .card .text-overlay {
  opacity: 0;
  transform-style: preserve-3d;
  z-index: 1;
}
.card-wrapper:hover .card .purchase-button-container {
  opacity: 1;
}

.card {
  width: 200px;
  height: 200px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  transform: perspective(1000px);
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  background-color: #fbfbfb;
  color: #272727;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

.card-container-center{
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 100%;
  cursor: default;
}

.text-overlay {
  transition: transform 0.8s ease-in-out, opacity 1s ease;
  transform: perspective(1000px) translateY(0) translateX(0) translateZ(80px);
  -webkit-transform: perspective(1000px) translateY(0) translateX(0) translateZ(80px);
  pointer-events: none;
  position: relative;
  perspective: inherit;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: #7030a0;
  width: 100%;
}

.text-overlay .material-symbols-outlined{
}

.back-h2 {
  font-weight: 500;
  margin-top: 0;
}

.back-h2-title {
  font-weight: 700;
  width: 90px;
  height: 45px;
  line-height: 45px;
  position: absolute;
  top: 10%;
  left: 20%;
  text-align: center;
}

.back-h2-title label{
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

.purchase-button-container {
  color: #7030a0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  top: 0;
  transform: perspective(1000px) rotateY(179deg) translateY(0) translateZ(80px);
  opacity: 0;
  z-index: -1;
  transition: transform 0.8s ease-in-out, opacity 1s ease;
  width: 100%;
  height: 100%;

}

.purchase-button-container .buttonContainer{
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.purchase-button-container a{
  background: rgb(112,48,160);
  width: 40%;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  color: white;
  text-align: center;
  cursor: pointer;
}

.purchase-button-container .buttonContainer a:hover{
  background: rgba(112,48,160, 0.8);
}

.details-text {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: #7030a0;
}

@media screen and (max-width: 767px) {
  .card-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    cursor: default;
  }

  .back-h2 {
    overflow: hidden;
    width: 80%;
    font-weight: 100;
  }
  .card{
    width: 300px;
    max-width: 25vw;
    height: 300px;
    max-height: 25vw;
  }

  .text-overlay {
    transform: perspective(1000px) translateY(0) translateX(0) translateZ(80px);
    -webkit-transform: perspective(1000px) translateY(0) translateX(0) translateZ(80px);
  }

  .purchase-button-container{
    transform: perspective(1000px) rotateY(179deg) translateY(0) translateX(3px) translateZ(80px);
  }

}

@media screen and (max-width: 1921px) and (min-width: 768px)  {
  .purchase-button-container{
  }

}


</style>
