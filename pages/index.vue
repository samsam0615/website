<template>
  <Head>
    <Title>愛動智 EduAIR</Title>
    <Meta name="description" content="愛動智教育系統有限公司由香港中文大學初創種子基金啟動，是一家非牟利機構，董事會成員為香港中文大學深圳研究院院長任揚教授和系統工程與工程管理學蒙美玲教授，致力於以教育為主導，推動年輕人對AI/STEAM的學習和認知，幫助他們在相關領域中實現自己的夢想和抱負。"/>
  </Head>
  <div style="width: 100%" >
    <div class="promote-container video-container" style="overflow: hidden; width: 100%;">
      <VideoBackground />
      <div class="video-description">
        <label class="title">{{$t('homepage.slogan')}}</label>
        <label class="content">{{$t('homepage.slogan2')}}</label>
      </div>
    </div>
    <div class="promote-container promote-container-2 " v-show="true" >
      <div class="promote-container-content text-container" onclick="" >
        <div class="description-box-title" style="padding: 30px; font-size: 30px; font-weight: 500">
          <label>最新消息</label>
        </div>
        <div class="responsive-div" style="">
          <div style="width: 300px; height: 300px;"> 
            <img :src="'/image/event7.jpg'" style="width: 100%; aspect-ratio: 3 / 2" />
            香港教育局課程
            STEAM教育學與教和評估系列：初中人工智能課程單元應用實踐工作坊
          </div>
          <div style="width: 300px; height: 300px"> 
            <img :src="'/image/event1.jpg'" style="width: 100%; aspect-ratio: 3 / 2" />
            中大賽馬會「智」為未來計劃 - 人工智能教育及探索實驗室開放日
            「危機解除」工作坊
          </div>
          <div style="width: 300px; height: 300px"> 
            <img :src="'/image/event6.jpg'" style="width: 100%; aspect-ratio: 3 / 2" />
            中大賽馬會「智」為未來計劃 - 「智」為未來暑期訓練營 2023
            「iCar達人」工作坊
          </div>
        </div>
      </div>
    </div>
    <div class="promote-container promote-container-1 " v-show="true" >
      <div class="promote-container-content text-container" onclick="" >
        <div class="description-box-title" style="padding: 30px; font-size: 30px; font-weight: 500">
          <label>我們的服務</label>
        </div>
        <div class="responsive-div" style="">

          <PictureFrame :title="'創新教學套件'" :image="'/image/img0.jpg'">
            由中大工程專家研發的一系列學習工具，是學習AI/STEAM的最佳起點
          </PictureFrame>
          <PictureFrame :title="'嶄新學習體驗'" :image="'/image/img1.jpg'">
            提供嶄新及貼近生活的課程，讓學生無痛學習AI/STEAM課題
          </PictureFrame>
          <PictureFrame :title="'互動AI展品'" :image="'/image/img2.jpg'">
            結合機械與AI，研發出多個在藝術/玩樂/生活方面的AI展品，讓學生了解AI的廣泛應用
          </PictureFrame>
        </div>
      </div>
    </div>
    <div class="promote-container promote-container-2">
      <div class="promote-container-content text-container" onclick="">
        <div class="description-box-title" style="padding: 30px; font-size: 30px; font-weight: 500">
          <label>我們的成果</label>
        </div>
        <div style="display: flex; justify-content: center; width: 100%; gap: 50px; padding-top: 20px; flex-wrap: wrap">
          <UpCounter :text1='"舉辦"' :text2='"學生訓練班"' :image='"/image/materials/work_history.png"' :number='5' />
          <UpCounter :text1='"舉辦"' :text2='"教師工作坊"' :image='"/image/materials/teacher2.png"' :number='6' />
          <UpCounter :text1='"已有"' :text2='"本地中學使用"' :image='"/image/materials/school2.png"' :number='238' />
          <UpCounter :text1='"覆蓋"' :text2='"學生"' :image='"/image/materials/people.png"' :number='2560' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head () {
    return {
      title: '愛動智 EduAIR',
      meta: [
        {hid: 'og:title', name:'og:title' , content: '愛動智 EduAIR'},
      ],
    }
  }
}
</script>

<style scoped>
.responsive-div{
  display: flex; justify-content: center; width: 100%; gap: 50px; padding-top: 20px
}

@media screen and (max-width: 1200px) {
  .responsive-div{
    flex-direction: column;
    align-items: center;
  }
}
</style>

<style >
    .promote-container{
        position: relative;
        width: 100%;
        display: flex;
        justify-content:center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .promote-container-content{
        position: relative;
        width: 100%;
        display: flex;
        justify-content:center;
        height: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 50px;
    }

    @media screen and (max-width: 767px) {
        .promote-container {
            padding: 20px 0;
        }
        .promote-container-content{
            padding: 0;
        }

        .video-container{
            padding: 0;
        }
    }

    .promote-container-1{
        background-color: #ececec ;
    }

    .promote-container-2{
        background-color: #ffffff ;
    }

    .promote-element{
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid white;
    }

    .material-symbols-outlined {
        font-size: 72px;
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
    }

    .video-description{
        position: absolute;
        width: 45%;
        right: 2%;
        border-radius: 10px;
        text-shadow: black 3px 3px 10px;
        color: white;
    }

    .video-description .title{
        font-size: 6vw;
    }

    .video-description .content{
        font-size: 3vw;
    }
</style>
