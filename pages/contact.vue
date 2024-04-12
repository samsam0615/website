<template>

  <Head>
    <Title>{{ $t('navbar.contactus') }}</Title>
    <Meta name="description" content="$t('contact.content')" />
  </Head>
  <div class="bg">
    <div v-if="isError"
      style="position: fixed; width: 400px; height: max-content; background: rgba(255, 236, 236, 0.95); z-index: 1; top: 50%; left: 50%; max-width: 75%; max-height: 40%; transform: translate(-50%, -50%); padding: 25px;">
      <div style="font-size: 20px">Failed Sending Form</div>
      <div style="font-size: 16px; padding: 10px 0">
        The contact form functionality has encountered an issue. Please utilize email to get in touch with us.
      </div>
    </div>
    <div v-if="isSuccess"
      style="position: fixed; width: 400px; height: max-content; background: rgba(236, 255, 236, 0.95); z-index: 1; top: 50%; left: 50%; max-width: 75%; max-height: 40%; transform: translate(-50%, -50%); padding: 25px;">
      <div style="font-size: 20px">Send Sucessfully </div>
      <div style="font-size: 16px; padding: 10px 0">
      </div>
    </div>
    <div class="pageContent-container">
      <div class="text-container">
        <div class="form">
          <div
            style=" width: 100%; background: rgba( 255, 255, 255, 0.85); padding: 30px; flex: 1; border-radius: 10px;">
            <label class="pageTitle font-big">{{ $t('contact.title') }}<br></label><br>
            <form id="contactform" ref="contactform" style="display: flex; flex-direction: column">
              <input v-model="name" class="font-mini" type="text" id="name" name="name"
                :placeholder="$t('contact.name')" autocomplete="off" required>
              <input v-model="email" class="font-mini" type="text" id="email" name="email"
                :placeholder="$t('contact.email')" autocomplete="off" required>
              <textarea v-model="content" class="font-mini" :placeholder="$t('contact.message')" name="message"
                id="message"></textarea>
              <div class="row" style="display: flex; justify-content: space-between">
                <input class="font-mini" type="text" id="phone" name="phone" :placeholder="$t('contact.phone')"
                  autocomplete="off">
                <input class="font-mini" type="text" id="contactformOrganization" name="organization"
                  :placeholder="$t('contact.organization')" autocomplete="off">
              </div>
              <div style="justify-content: center; display: flex">
                <button @click.prevent="sendForm">{{ $t('contact.button1') }}</button>
                <button @click.prevent="resetForm">{{ $t('contact.button2') }}</button>
              </div>
            </form>
          </div>
        </div>
        <div
          style="display: flex; align-self: flex-start; flex-direction: column; max-width: 100%; justify-content: center; align-items: center; padding: 20px 0; width: max-content; align-self: center">
          <div style="border-radius: 10px; overflow: hidden; width: 400px; height: 300px; max-width: 100%">
            <GoogleMap api-key="AIzaSyBgiaMIsBDwdjUXYZZkvuLlAtrBmBaHRtY" style="width: 100%; height: 100%;"
              :center="center" :zoom="17">
              <Marker :options="{ position: center }" />
            </GoogleMap>
          </div>
          <div
            style="width: 400px; max-width: 100%; padding: 20px; line-height: 30px; background: rgba(255,255,255,0.75); margin: 20px 0 5px; border-radius: 10px; display: flex; align-items: center; padding: 20px;">
            <div>
              {{ $t('contact.detail.phone') }}<br>
              {{ $t('contact.detail.email') }}<br>
              {{ $t('contact.detail.address') }}
            </div>
            <a target="_blank" href="https://wa.me/message/6UXEU7SCWSVSE1"
              style="color: #008069; flex: 1; display: flex; justify-content: center; align-items: center; flex-direction: column; cursor: pointer">
              <img :src="'/image/whatsapp-qr.png'" style="width: 100px">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: { GoogleMap, Marker },
  data() {
    return {
      name: "",
      email: "",
      content: "",
      center: {
        lat: 22.428077697753906,
        lng: 114.20909881591797
      },
      isError: false,
      isSuccess: false
    }
  },
  methods: {
    sendForm() {
      if (this.name == "" || this.email == "" || this.content == "") {
        return
      }

      emailjs.sendForm('service_dw5j7af', 'template_glfviys', '#contactform', 'fmOc4joeStfAyUTP1').then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false
        }, 2000)
        this.resetForm();
      }, (err) => {
        console.log('FAILED...', err)
        this.isError = true;
        setTimeout(() => {
          this.isError = false
        }, 2000)
      })
      /* location.reload() */
    },
    resetForm() {
      this.$refs.contactform.reset()
    }
  }
}
</script>

<style scoped>
.layer {
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.3;
}

input,
textarea {
  background: none;
  padding: 20px;
  border: 1px solid #333;
  margin: 7px 0;
}

input:active,
textarea:active {
  outline: none;
}


input:not(:placeholder-shown),
textarea:not(:placeholder-shown) {
  background: #6d0e77;
  color: white;
}

.row input {
  width: 100%;
}



textarea {
  flex-grow: 1;
  height: 200px;
  resize: none;
}

button {
  width: max-content;
  padding: 10px 20px;
  background: none;
  margin: 7px 7px;
  border: 1px solid #333;

}

button:hover {
  cursor: pointer;
  background: white;
}

.form {
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: max-content;
}

.bg {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url('~/assets/banner3.jpg');
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  height: max-content;
}

.namecard {
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
  background: rgba(255, 255, 255, 0.6);
  animation: rotate3d 1s linear forwards;
  transform: rotateY(0deg);
}

.namecard .row {
  padding: 5px;
  display: flex;
}

.namecard .row .button {
  width: 100px;
  height: 40px;
  background: white;
  border-radius: 3px;
  margin: 0 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  overflow: hidden;
  color: white;
  cursor: pointer;
}

.namecard .row .button .icon {
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px white solid;
  cursor: pointer;
}

.namecard .row .button .text {
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.namecard:hover {
  background: rgba(255, 255, 255, 0.8);
}

@keyframes rotate3d {
  from {
    transform: scale(0) rotateY(180deg) rotateZ(180deg);
    transform-origin: 100% 100%;
  }

  to {
    transform: scale(1) rotateY(0deg) rotateZ(0deg);
  }
}

.pageContent-container {
  width: 100%;
  padding: 60px 0 0 0;
  flex-direction: row
}

.text-container {
  width: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row
}

@media screen and (min-width: 1200px) {
  .row input+input {
    margin-left: 10px;
  }
}

@media screen and (max-width: 1199.9px) {
  .form .row {
    flex-direction: column;
  }

  .text-container {
    flex-direction: column;
  }
}
</style>