<template>
  <Title>聯絡我們</Title>
  <Meta name="description" content="立即聯絡 EduAIR"/>
  <div class="bg">
    <div class="pageContent-container">
      <div class="text-container">
          <div class="form"> 
            <div style=" width: 100%; background: rgba( 255, 255, 255, 0.7   ); padding: 30px; flex: 1"> 
              <label class="pageTitle font-big">立即聯絡 EduAIR<br></label><br>
              <form  id="contactform" ref="contactform" style="display: flex; flex-direction: column">
                <input v-model="name" class="font-mini" type="text" id="name"  name="name" placeholder="姓名（必填）" autocomplete="off" required>
                <input v-model="email" class="font-mini" type="text" id="email" name="email" placeholder="電郵（必填）" autocomplete="off" required>
                <textarea v-model="content" class="font-mini" placeholder="內容（必填）" name="message" id="message"></textarea>
                <div class="row" style="display: flex; justify-content: space-between"> 
                  <input class="font-mini" type="text" id="phone" name="phone" placeholder="聯絡電話" autocomplete="off">
                  <input class="font-mini" type="text" id="contactformOrganization" name="organization" placeholder="機構/公司名稱"  autocomplete="off">
                </div>
                <div style="justify-content: center; display: flex"> 
                  <button @click="sendForm">提交</button>
                  <button @click.prevent="resetForm">重置</button>
                </div>
              </form>
            </div>
          </div>
          <div style="display: flex; align-self: flex-start; flex-direction: column; width: 100%; justify-content: center; align-items: center; padding: 20px 0; width: max-content; align-self: center">
            <div style="border-radius: 5px; overflow: hidden; width: 400px; height: 300px; max-width: 100%"> 
              <GoogleMap api-key="AIzaSyBgiaMIsBDwdjUXYZZkvuLlAtrBmBaHRtY" style="width: 100%; height: 100%;" :center="center" :zoom="17">
                <Marker :options="{ position: center }" />
              </GoogleMap>
            </div>
            <div style="width: 400px; max-width: 100%; padding: 20px; line-height: 30px; background: rgba(255,255,255,0.6); margin: 20px 0 5px; border-radius: 10px; display: flex; align-items: center; padding: 20px;">
              聯絡電話：+852 3618 8911<br>
              聯絡電郵：info@eduairhk.com<br>
              地址：科學園16W棟2樓237室
            </div>
          </div>
      </div>
<!--       <div style="display: flex; align-self: flex-start; padding: 20px 0; flex-direction: column; width: 100%; max-width: 100%">
        <div style="border-radius: 5px; overflow: hidden; width: 500px; height: 350px;"> 
          <GoogleMap api-key="AIzaSyBgiaMIsBDwdjUXYZZkvuLlAtrBmBaHRtY" style="width: 100%; height: 100%;" :center="center" :zoom="17">
            <Marker :options="{ position: center }" />
          </GoogleMap>
        </div>
        <div style="width: 100%; padding: 20px; line-height: 30px; background: rgba(255,255,255,0.6); margin: 20px 0 5px; border-radius: 10px; display: flex; align-items: center; padding: 20px">
          聯絡電話：+852 3618 8911<br>
          聯絡電郵：info@eduairhk.com<br>
          地址：香港科學園16W棟2樓237室
        </div>
      </div> -->
<!--       <div style="overflow: visible; position: relative; width: 80%; display: flex; justify-content: center; align-items: center"> 
        <div class="namecard" style=""> 
          <div style="display: flex;">
            <div style="flex: 1; display: flex; flex-direction: column; height: 100%; position: relative">
              <div style="font-size: 23px; display: flex; align-items: center; height: max-content">
                <img :src="'logo.png'" style="width: 100px">
              </div>
              <div class="row">+852 3618 8911</div>
              <div class="row">info@eduairhk.com</div>
              <div class="row">科學園16W棟2樓237室</div>
            </div>
            <div style="border-radius: 5px; overflow: hidden; width: 160px; height: 160px"> 
              <GoogleMap api-key="AIzaSyBgiaMIsBDwdjUXYZZkvuLlAtrBmBaHRtY" style="width: 100%; height: 100%;" :center="center" :zoom="17">
                <Marker :options="{ position: center }" />
              </GoogleMap>
            </div>
          </div>
          <div class="row" style="flex: 1; align-items: flex-end; justify-content: flex-end; padding: 0">
            <div class="button" style="background: #395694; border-bottom: 4px solid #2c4472">
              <label class="text">Facebook</label>
            </div>
            <div class="button" style="background: #e55a77; border-bottom: 4px solid #da2e69">
              <label class="text">Instagram</label>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: { GoogleMap, Marker },
  data(){
    return{
      name: "",
      email: "",
      content: "",
      center: {
        lat: 22.428077697753906,
        lng: 114.20909881591797
      }
    }
  },
  methods: {
    sendForm () {
      if(this.name == "" || this.email == "" || this.content == ""){
        return
      }
      
      emailjs.sendForm('service_b5o3c5j', 'template_glfviys', '#contactform', 'fmOc4joeStfAyUTP1').then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      }, (err) => {
        console.log('FAILED...', err)
      })
      location.reload()
    },
    resetForm () {
      this.$refs.contactform.reset()
    }
  }
}
</script>

<style scoped>
.layer{
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.3;
}

input, textarea{
  background: none;
  padding: 20px;
  border: 1px solid #333;
  margin: 7px 0;
}

input:active, textarea:active{
  outline: none;
}


input:not(:placeholder-shown), textarea:not(:placeholder-shown){
  background: #6d0e77;
  color: white;
}

.row input{
  flex-basis: 45%;
  max-width: 48%;
}

textarea{
  flex-grow: 1;
  height: 200px;
  resize: none;
}

button{
  width: max-content;
  padding: 10px 20px;
  background: none;
  margin: 7px 7px;
  border: 1px solid #333;
  
}

button:hover{
  cursor: pointer;
  background: white;
}

.form{
  width: 100%; 
  max-width: 500px;
  display: flex; 
  justify-content: center; 
  align-items: center; overflow: hidden; 
/*   background-image: url('~/assets/image/icars2.jpg'); 
  background-size: auto 1000px; background-position: 0 -200px; */
  height: max-content;
}

.bg{
  width: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden; 
  background-image: url('~/assets/image/icars2.jpg'); 
  background-size: cover; 
  background-position: 0 0;
  background-repeat: no-repeat;
  height: max-content;
}

.namecard{
  position: relative;
  max-width: 100%;
  min-width: 300px; 
  min-height: 255px;
  width: 450px;
  height: 275px; 
  align-self: flex-start; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 10px;
  /* background: white;  */
  margin-top: 20px; 
  border-radius: 10px; 
  overflow: hidden;
  color: #666666;
  background: rgba( 255, 255, 255, 0.6);
  animation: rotate3d 1s linear forwards;
  transform: rotateY(0deg);
}

.namecard .row{
  padding: 5px;
  display: flex;
}

.namecard .row .button{
  width: 100px; height: 40px; background: white; border-radius: 3px;
  margin: 0 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  overflow: hidden;
  color: white;
  cursor: pointer;
}

.namecard .row .button .icon{
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px white solid;
  cursor: pointer;
}

.namecard .row .button .text{
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.namecard:hover{
  background: rgba( 255, 255, 255, 0.8);
}

@keyframes rotate3d{
  from {
    transform: scale(0) rotateY(180deg) rotateZ(180deg);
    transform-origin: 100% 100%;
  }
  to {
    transform: scale(1) rotateY(0deg) rotateZ(0deg);
  }
}

.pageContent-container{
  width: 100%; padding: 60px 0 0 0; flex-direction: row
}

.text-container{
  width: 100%; position: relative; padding: 20px; display: flex; justify-content: space-around; align-items: center; flex-direction: row
}

@media screen and (max-width: 1200px) {
  .form .row{
    flex-direction: column;
  }

  .text-container{
    flex-direction: column;

  }
}
</style>