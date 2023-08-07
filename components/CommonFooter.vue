<template>
  <div class="footer">
    <div style="">
      聯絡我們
      <ul>
        <li>
          <span class="material-symbols-outlined">
            call
          </span>
          <a>
            +852 3618 8911
          </a>
        </li>
        <li>
          <span class="material-symbols-outlined">
            mail
          </span>
          <a>
            info@eduairhk.com
          </a>
        </li>
        <li>
          <span class="material-symbols-outlined">
            location_on
          </span>
          <a>
            沙田香港科學園16W棟2樓237室
          </a>
        </li>
      </ul>
    </div>
    <div style="line-height: 24px;">
      版權所有 © 愛動智教育系統有限公司<br>
      Copyright © EduAIR Systems Limited.
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>

<style>
    @import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    .footer{
        width: 100%;
        max-width: 100%;
        min-height: 140px;
        display: flex;
        position: relative;
        color: #ffffff;
        justify-content: space-around;
        gap: 2vw;
        padding: 15px 0 0 0;
        background: #6d0e77;
    }
    .footer .material-symbols-outlined{
        font-size: 16px;
    }
    .footer div{
        border-top: 3px solid #ffffff;
        width: 25%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 5px 0px 0 0;
        text-align: left;
    }
    .footer div ul{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
    }
    .footer div ul li{
        margin-top: 5px;
        overflow-wrap: break-word;

    }
    .footer div ul li a{
        text-decoration: none;
        color: #ffffff;
        margin-left: 15px;
    }

    .copyright{
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .copyright div{
        margin:0px auto;
    }
    @media screen and (max-width: 1200px) {
      .footer{
        padding: 15px;
        flex-direction: column;
      }
      .footer div{
          flex-basis: 100%;
          width: 100%;
      }
      .footer div:not(:first-child) {
        border-top: none;
      }
    }
</style>
