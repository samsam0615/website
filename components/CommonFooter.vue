<template>
  <Meta name="format-detection" content="telephone=no" />
  <footer class="container">
    <div class="footer" style="">
      <div style="width: 50%" class="main">
        <!-- <label class="font-middle" style="padding: 5px 0">{{ $t('footer.title1') }}</label> -->
        <a href="https://www.facebook.com/eduair" target="_blank">
          <img :src="'/image/facebook3.png'" height="14px" />
          <label class="text" style="padding: 0 10px">愛動智教育系統</label>
        </a>
        <a href="https://www.instagram.com/eduair_hk/" target="_blank">
          <img :src="'/image/instagram3.png'" height="14px" style="" />
          <label class="text" style="padding: 0 10px">eduair_hk</label>
        </a>
      </div>
      <div style="max-width: 50%">
        <!-- <label class="font-middle" style="padding: 5px 0">{{ $t('footer.title2') }}</label> -->
        <label style="padding: 0px 0">
          <img :src="'/image/call3.png'" height="14px" style="" />
          <label class="text" style="padding: 0 10px;" x-apple-data-detectors="off">+852 6437 3924</label>
        </label>
        <label style="padding: 0px 0">
          <img :src="'/image/mail3.png'" height="14px" />
          <label class="text" style="padding: 0 10px;">info@eduairhk.com</label>
        </label>
        <label style="padding: 0px 0;">
          <img :src="'/image/location3.png'" height="14px" />
          <label class="text" style="padding: 0 10px;">{{ $t('footer.location') }}</label>
        </label>
      </div>
    </div>
    <div style="font-size: 12px;">
      慈善機構註冊編號：91／18516
    </div>
    <div style="font-size: 8px; padding: 0px 0 5px 0">
      Copyright © EduAIR Systems Limited.
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
  name: 'CommonFooter'
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

.container {
  width: 100%;
  max-width: 100%;
  /* min-height: 140px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #ffffff;
  justify-content: space-around;
  padding: 15px 15px 0 0;
  background: #6d0e77;
}

.footer {
  max-width: 1000px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer div {
  width: max-content;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 0px 0 0;
  text-align: left;
}

.footer .main {
  border: none;
  padding: 0 0 0 0;
}

.text {
  font-size: smaller;
}



a {
  text-decoration: none;
  color: white;
  cursor: pointer;
  padding: 10px 0 0 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: max-content;
}

a label {
  cursor: pointer;
}

a:hover {
  color: #ffa500
}

@media screen and (max-width: 1199.9px) {
  /*       .footer{
        padding: 15px;
        justify-content: center;
        align-items: center;
      }
      .footer div{
          padding-bottom: 20px;
      } */

  .footer {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 10px;
  }
}
</style>
