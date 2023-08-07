<template>
  <div class="card-wrapper-orange" onclick="">
    <div class="card">
        <div class="text-overlay">
          <label class="back-h2">{{title}}</label>
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
.card-wrapper-orange{
    width: 200px;
    height: 200px;
}

.card-wrapper-orange .card {
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  transform: perspective(1000px);
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  background-color: orange;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  border-radius: 10px;
}

.card-wrapper-orange .text-overlay {
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
  width: 100%;
}

.card-wrapper-orange:hover .card {
    transform: rotateY(179deg);
    -webkit-transform: rotateY(179deg);
    z-index: 2;
}

.card-wrapper-orange:hover .text-overlay {
  opacity: 0;
  transform-style: preserve-3d;
  z-index: 1;
}

.card-wrapper-orange:hover .purchase-button-container {
  opacity: 1;
}

.card-wrapper-orange .back-h2 {
  font-size: 50px;
  font-weight: 500;
  margin-top: 0;
}

.card-wrapper-orange .back-h2-title {
  font-weight: 700;
  width: 90px;
  height: 45px;
  line-height: 45px;
  position: absolute;
  top: 10%;
  left: 20%;
  text-align: center;
}

.card-wrapper-orange .back-h2-title label{
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

.card-wrapper-orange .purchase-button-container {
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

  font-size: 25px;
}

.card-wrapper-orange .purchase-button-container .buttonContainer{
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}

.card-wrapper-orange .purchase-button-container a{
  background: rgb(112,48,160);
  width: 40%;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  color: white;
  text-align: center;
  cursor: pointer;
}

.card-wrapper-orange .purchase-button-container .buttonContainer a:hover{
  background: rgba(112,48,160, 0.8);
}

.card-wrapper-orange .details-text {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: #7030a0;
}

@media screen and (max-width: 767px) {
  .card-wrapper-orange .back-h2 {
    font-size: 10px;
    overflow: hidden;
    width: 80%;
    font-weight: 100;
  }
  .card-wrapper-orange .card{
    width: 300px;
    max-width: 25vw;
    height: 300px;
    max-height: 25vw;
  }

  .card-wrapper-orange .text-overlay {
    transform: perspective(1000px) translateY(0) translateX(0) translateZ(80px);
    -webkit-transform: perspective(1000px) translateY(0) translateX(0) translateZ(80px);
  }

  .card-wrapper-orange .purchase-button-container{
    transform: perspective(1000px) rotateY(179deg) translateY(0) translateX(3px) translateZ(80px);
    font-size: 10px;
  }

}

@media screen and (max-width: 1921px) and (min-width: 768px)  {
  .card-wrapper-orange .purchase-button-container{
      font-size: 20px;
  }

}

@media screen and (min-width: 1920px) {
  .card-wrapper-orange .card{
    min-width: 300px;
    min-height: 300px;
  }
}
</style>
