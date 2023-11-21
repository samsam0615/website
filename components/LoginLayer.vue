<template>
  <transition name="fadeout">
    <div style="padding-top: 60px" class="login-container" :class="{wrong: wrong}" v-show="display"> 
        
        
        <div style="font-size: 15px; color: #1967D2;">
            For Inquiries, Please Contact: info@eduairhk.com
        </div>

        <div style="padding: 5px 0 20px; display: flex; align-items: center;" >
          <div style="padding: 0 10px; font-size: 15px; color: #1967D2">
            *By continuing, you agree to the 
            <a href="https://eduairhk.com/privacy" target='_blank' style="color: #39499f; font-size: 15px; border-bottom: 1px solid #39499f; cursor: pointer; text-decoration: none;">
              Privacy Policy
            </a>
          </div>
        </div>
          <div class="password">
              <input type="password" placeholder="Password" v-model="password"  @keyup.enter.prevent="login" autocomplete="new-password">
              <div class="button" style="position: relative; " @click.prevent="login">
                  <img :src="'/image/enter.png'" style="width: 100%;">
              </div>
          </div>
        <div class="icar" style="margin: 30px 0; position: relative"> 
            <img :src="'/image/iCarF2.png'">
            <div class="arm L" > 
              <img  :src="'/image/armL2.png'" >
            </div>
            <div class="arm R" > 
              <img  :src="'/image/armR2.png'" >
            </div>
        </div>
        <div style="font-size: 40px; color: #1967D2; font-weight: 600; line-height: 40px; position: relative">
          CUHK iPort
          <div class="message"> 
            已參與初中人工智能單元應用實踐工作坊的老師請聯絡info@eduairhk.com 獲取登入密碼。
          </div>
        </div>
    </div>   
  </transition>
</template>

<script>
export default {
    name: 'LoginLayer',
    emits: ['login'],
    data(){
      return{
        display: true,
        password: '',
        forget: false,
        wrong: false,
        wrongTimeout: null,
        isAgree: false
      }
    },
    methods: {
      login(){
        if(this.password === 'cuhkiport'){
          this.display = false;
          this.$emit('login');
        } else {
          if (this.wrong == false) {
            this.wrong = true;
            this.wrongTimeout = setTimeout(() => {
              this.wrong = false;
            }, 1000)
          } else {
            clearTimeout(this.wrongTimeout);
            this.wrongTimeout = setTimeout(() => {
              this.wrong = false;
            }, 1000)
          }
        }
      }
    }
}
</script>

<style scoped>
  .icar{
    overflow: hidden;
    width: 300px; 
    height: 300px; 
    min-width: 300px;
    min-height: 300px;
    display: flex; 
    justify-content: center; 
    padding: 40px; 
    border-radius: 50%;
    border: 3px solid #1967D2;
    transition: 1s ease-in-out; 
  }

  .icar img{
    width: 100%;
    height: 100%;
  }

  .arm{
    top: -40px;
    width: 150%; 
    position: absolute; 
    animation: close 1s infinite;
    z-index: 1;
    transform-origin: center;
    transition: .7s ease-in-out; 
  }

  .L{
    right: 50%;
    transform: translateX(-100%) rotate(-40deg);
  }

  .R{
    left: 50%;
    transform: translateX(100%) rotate(40deg);
  }

  .arm img{
    width: 100%;
    height: auto;
    animation: rotate 1s infinite;
  }

  .password{
    position: relative;
    width: 300px; 
    border-radius: 50px;
    border: 3px solid #1967D2;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    padding: 3px 3px 3px 20px;
    align-items: center;
    background: #e8f0fe;
    color: #1967D2;
    justify-content: space-between;

  }

  .password .button{
    width: 40px;
    height: 40px;
    padding: 10px;
    background: #1967D2;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .password .button:hover{
    background: #2077E2;
  }

  .password input{
        width: 200px;
        background: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        font-size: 25px;
        border: none;
    }

  .password input:focus{
    outline: none;
  }

  .password:focus-within ~ .icar .arm{
    transform: translateX(0);
  }

    input::-ms-reveal,
    input::-ms-clear {
    display: none;
    }

    .login-container{
      z-index: 10;
      height: 100%; 
      width: 100%; 
      position: absolute; 
      background: #e8f0fe; 
      display: flex; 
      flex-direction: column-reverse; 
      justify-content: center; 
      align-items: center;

      opacity: 1;
      transition: opacity 1s ease-in-out, transform 1s ease-in-out; 
    }

    .forget{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #1967D2; cursor: pointer; 
      font-size: 16px;
    }

    .forget:hover{
      color: black;
    }

    .forget-solution{
      font-size: 16px;
      color: red;
    }

/*   .icar{
    background: red;
  } */

  .wrong .L{
    right: 50%;
    transform: translate(27%, 20%) rotate(-25deg) !important;
    transform: translate(32%, 26%) rotate(-25deg) !important;
  }

  .wrong .R{
    left: 50%;
    transform: translate(-27%, 20%) rotate(25deg) !important;
    transform: translate(-32%, 26%) rotate(25deg) !important;
  }

  .wrong .password{
    border: 3px solid red;
    color: red;
  }


  .fadeout-enter-from ,
  .fadeout-leave-to{
    opacity: 0;
  }

  .message{
    position: absolute;
    right: 0;
    transform: translate(30%, 250px);
    line-height: 20px;
    z-index: 1;
    width: 220px;
    padding: 10px;
    height: 100px;
    background: rgba(255, 255, 255, 0.8);
    color: #1967D2;
    font-size: 16px;
  }

  .message::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom: 20px solid rgba(255, 255, 255, 0.8);
    border-top: 0;
    transform: translate(0, -100%);
    
  }
</style>