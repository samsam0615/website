<template>
  <Meta name="format-detection" content="telephone=no"/>
  <div class="container">
    <div class="footer" style=""> 
      <div  class="main">
        <label class="font-middle" >EduAIR 愛動智</label>
        <a href="https://www.facebook.com/eduair" target="_blank">
          <img :src="'/image/facebook3.png'" height="20px" /> 
          <label class="font-mini" style="padding: 0 10px">愛動智教育系統</label>
        </a>
        <a href="https://www.instagram.com/eduair_hk/" target="_blank">
          <img :src="'/image/instagram3.png'" height="20px" style="" /> 
          <label class="font-mini" style="padding: 0 10px">eduair_hk</label>
        </a>
      </div>
      <div>
        <label class="font-middle" >聯絡我們</label>
        <label style="padding: 4px 0">
          <img :src="'/image/call3.png'" height="18px" style="" /> 
          <label class="font-mini" style="padding: 0 10px;" x-apple-data-detectors="off">+852 5542 7564</label>
        </label>
        <label style="padding: 4px 0">
          <img :src="'/image/mail3.png'" height="18px" /> 
          <label class="font-mini" style="padding: 0 10px;">info@eduairhk.com</label>
        </label>
        <label style="padding: 4px 0">
          <img :src="'/image/location3.png'" height="18px" /> 
          <label class="font-mini" style="padding: 0 10px;">科學園16W棟2樓237室</label>
        </label>
      </div>


    </div>
    <div style="padding: 15px 0"> 
      Copyright © EduAIR Systems Limited.
    </div>
  </div>
</template>

<script>
export default {
  components: {  },
  name: 'CommonFooter'
}
</script>

<style scoped>
    @import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    .container{
        width: 100%;
        max-width: 100%;
        min-height: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        color: #ffffff;
        justify-content: space-around;
        padding: 15px 0 0 0;
        background: #6d0e77;
    }
    .footer{
      max-width: 800px; width: 100%; display: flex; flex-direction: row; justify-content: space-between;
    }
    .footer div{
        width: max-content;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 0 0px 0 0;
        text-align: left;
    }

    .footer .main{
      border: none; 
      padding: 0 0 0 0; 
    }



    a{
      text-decoration: none;
      color: white;
      cursor: pointer;
      padding: 10px 0 0 0; display: flex; align-items: center; cursor: pointer;
      width: max-content;
    }

    a label{
      cursor: pointer;
    }
    
    a:hover{
      color: #ffa500
    }

    @media screen and (max-width: 1200px) {
/*       .footer{
        padding: 15px;
        justify-content: center;
        align-items: center;
      }
      .footer div{
          padding-bottom: 20px;
      } */

      .footer{
        max-width: 1200px; width: 100%; display: flex; flex-direction: row; justify-content: space-around;
      }
    }
</style>
