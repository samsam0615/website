<template>
  <div class="contactform-container">
    <form id="contactform" ref="contactform">
      <div class="info-container">
        <div class="info-row">
          <div>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="姓名">
          </div>
          <div>
            <input
            type="text"
            id="salutation"
            name="salutation"
            placeholder="稱謂">
          </div>
        </div>
        <div class="info-row">
          <div>
            <input
            type="text"
            id="phone"
            name="phone"
            placeholder="聯絡電話">
          </div>
          <div>
            <input
            type="text"
            id="email"
            name="email"
            placeholder="電郵 (必填)"
            class="required"
            required>
          </div>
        </div>
        <div class="info-row info-row-2">
          <div class="textarea-conatiner">
            <textarea placeholder="內容 (必填)" name="message" id="message"></textarea>
          </div>
          <div class="extrainfo-conatiner" >
            <input type="text" id="contactformOrganization" name="organization" placeholder="機構/公司名稱">
            <div style="padding: 0; margin-top: 10px;">
                <input class="button" type="send" value="發送" @click="sendForm">
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  setup () {
  },
  methods: {
    sendForm () {
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

<style>
    .contactform-container{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1000px;
        height: max-content;
    }

    .contactform-container form{
        position: relative;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        height: max-content;
    }

    .info-container{
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        height: 100%;
        height: 400px;
    }

    .contactform-container input[type=text], textarea{
        position: relative;
        align-self: flex-start;
        border: none;
        background-color: #eaecfd;
        padding: 20px 20px;
        max-width: 100%;
        color: #5663c7;
        outline: none;
        width: 100%;
    }

    .contactform-container input[type=text]:focus, textarea:focus {
        border: 3px solid #8891d8;
    }

    .contactform-container textarea{
        resize: none;
        height: 100%;
        width: 100%;
    }

    .contactform-container textarea::placeholder, input[type=text]::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #5663c7;
        opacity: 1; /* Firefox */
    }

    .textarea-conatiner{
        width: 40%;
        flex-grow: 1;
        max-height: 300px;
    }

    .info-row{
        position: relative;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .info-row div{
        position: relative;
        width: 100%;
        padding: 5px 5px;
    }

    .extrainfo-conatiner{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: min-content;
        width: 30%;
    }

    .extrainfo-conatiner input[type=text]{
        width: 100%;
        flex-grow: 1;
    }

    .extrainfo-conatiner .button{
        width: 100%;
        border: none;
        padding: 10px 20px;
        background-color: #3545bf;
        color: white;
        text-align: center;
        align-self: flex-end;
        margin-top: auto;
        cursor: pointer;
    }

    .info-row-2{
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }

    @media screen and (max-width: 1200px) {
        .contactform-container form{
            margin-top: 40px;
        }

        .info-row-2{
            flex-direction: column;
        }

        .textarea-conatiner{
            width: 100%;
            min-height: fit-content;
            position: relative;
            display: flex;
            padding-bottom: 0;
        }

        .textarea-conatiner textarea{
            height: 200px;
        }

        .extrainfo-conatiner{
            width: 100%;
            height: 100px;
        }
        .contactform-container input[type=text], textarea{
            font-size: 15px;
        }
    }

@media screen and (max-width: 767px) {
/*         .info-row{
        flex-direction: column;
        flex-grow: 0;
    }

    .contactform-container input[type=text], textarea{
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    } */
}
</style>
