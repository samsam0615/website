<template>
  <Title>聯絡我們</Title>
  <Meta name="description" content="立即聯絡 EduAIR"/>
  <div class="pageContent-container " style="width: 100%; padding: 60px 0 0 0">
    <div class="text-container " style="width: 100%; position: relative; padding: 20px; display: flex; justify-content: center; align-items: center">
        <div class="form" style=""> 
          <div style="width: 100%; background: rgba( 255, 255, 255, 0.7   ); padding: 30px"> 
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
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  data(){
    return{
      name: "",
      email: "",
      content: "",
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
  flex-basis: 48%;
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
  width: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden; 
  background-image: url('~/assets/image/icars2.jpg'); 
  background-size: auto 1000px; background-position: 0 -200px;
  height: max-content;
}

@media screen and (max-width: 1200px) {
  .row{
    flex-direction: column;
    
  }
}
</style>