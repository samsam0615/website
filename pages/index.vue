<template>
  <Title>愛動智 EduAIR</Title>
  <div style="width: 100%" >
    <div class="promote-container video-container" style="overflow: hidden; width: 100%;">
      <VideoBackground />
      <div class="video-description">
        <label class="title">掌握AI 更好明天</label>
        <label class="content">愛動智教育系統提供一系列創新AI學習套件及課程</label>
      </div>
    </div>
    <div class="promote-container promote-container-1 " v-show="true" >
      <div class="promote-container-content text-container" onclick="" >
        <div class="description-box-title" style="padding: 30px; font-size: 30px; font-weight: 500">
          <label>我們的服務</label>
        </div>
        <div style="display: flex; justify-content: center; width: 100%; gap: 50px;  padding-top: 20px">
          <PictureFrame :title="'創新教學套件'" :image="'image/media/img0.jpg'">
            由中大工程專家研發的一系列學習工具，是學習AI / STEAM的最佳起點
          </PictureFrame>
          <PictureFrame :title="'嶄新學習體驗'" :image="'image/media/img1.jpg'">
            提供嶄新及貼近生活的課程，讓學生無痛學習AI / STEAM課題
          </PictureFrame>
        </div>
      </div>
    </div>
    <div class="promote-container promote-container-2">
      <div class="promote-container-content text-container" onclick="">
        <div class="description-box-title" style="padding: 30px; font-size: 30px; font-weight: 500">
          <label>我們的成果</label>
        </div>
        <div style="display: flex; justify-content: center; width: 100%; gap: 50px; padding-top: 20px">
          <UpCounter :text1='"舉辦"' :text2='"學生訓練班"' :image='"image/materials/work_history.png"' :number='"5"' />
          <UpCounter :text1='"舉辦"' :text2='"教師工作坊"' :image='"image/materials/teacher2.png"' :number='"6"' />
          <UpCounter :text1='"舉辦"' :text2='"本地中學使用"' :image='"image/materials/school2.png"' :number='"238"' />
          <UpCounter :text1='"覆蓋"' :text2='"學生"' :image='"image/materials/people.png"' :number='"2560"' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

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
