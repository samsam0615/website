<template>
  <Title>CUHK iCar</Title>
  <div class="cuhkicar-wrapper">
    <PageCatalog2 @click="scroll" :title='"CUHK iCar"' :list='["iCar是甚麼？", "如何使用iCar？", "道德困境實驗", "人面識別追蹤實驗", "手畫線循跡實驗", "iCar資源總匯"]'/>
    <PageCatalog3 @click="scroll" :title='"CUHK iCar"' 
      :list='["image/materials/logo_icar3.png", 
              "image/materials/logo_question2.png", 
              "image/materials/logo_moraldilemma.png", 
              "image/materials/logo_facereg.png", 
              "image/materials/logo_handdraw.png", 
              "image/materials/logo_download.png"]'/>
    <div class="cuhkicar-container" >
      <div class="page-content" ref="content">
        <TextTitle :image="'image/materials/logo_icar3.png'">iCar是甚麼？</TextTitle>
        <div class="text-content">
          CUHK iCar是由香港中文大學科研團隊開發，專爲初中學生而設的AI教學套件，<br>
          可進行多個有趣的教學實驗，讓學生輕鬆透過積木編程掌握AI。<br>
          全港有超過5成中學正使用CUHK iCar進行AI教學活動。
        </div>
        <TextTitle :image="'image/materials/logo_question2.png'">如何使用CUHK iCar？</TextTitle>
        <div class="text-content">
          <div style="display: flex; flex-direction: row; padding: 0; justify-content: center; padding-top: 0; flex-wrap: wrap">
            <div style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin-left: 15px; margin-right: 15px; margin-top: 25px;">
              MakeCode積木編程
              <div class="imageContainer">
                <img src="@/assets/image/materials/logo_blockly.png" style="height: 90%">
              </div>
            </div>
            <div style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin-left: 15px; margin-right: 15px; margin-top: 25px">
              手機藍芽控制
              <div class="imageContainer">
                <img src="@/assets/image/materials/logo_app.png" style="height: 90%">
              </div>
            </div>
            <div style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin-left: 15px; margin-right: 15px; margin-top: 25px">
              紅外線遙控器
              <div class="imageContainer">
                <img src="@/assets/image/materials/logo_remote.png" style="height: 70%">
              </div>
            </div>
          </div>
        </div>
        <TextTitle :image="'image/materials/logo_moraldilemma.png'">道德困境實驗</TextTitle>
        <div class="text-content">
          <img src="@/assets/image/gif/gif_moral2.gif" style="width: 50%; min-width: 250px"><br>
          當自動駕駛車刹車功能失靈，只能左轉或右轉，<br>
          然而，不論選擇哪條路線，車輛都將碰上其他路人！<br>
          眼前一邊是小孩，另一邊則是老人，自動車該怎麽辦？<br>
          人類和AI在同類事件中扮演甚麽角色？動手用CUHK iCar做實驗，一探究竟吧！<br><br>
          <TextBox :title="'討論問題舉隅'" :image="'image/materials/logo_think2.png'">
            CUHK iCar用了哪一種機器學習模式？<br>
            收集數據時，我們要注意甚麽？注意這些事項的目的是甚麽？<br>
            除了避開小孩和避開老人，CUHK iCar還有第三個選擇嗎？<br>
          </TextBox>
        </div>
        <TextTitle :image="'image/materials/logo_facereg.png'">人面識別追蹤實驗</TextTitle>
        <div class="text-content">
          <img src="@/assets/image/gif/gif_face2.gif" style="width: 50%; min-width: 250px"><br>
          爲甚麽自動駕駛車可以辨識人臉，並跟隨指定人臉行駛？<br>
          自動駕駛車又是如何學會這項技能？動手用CUHK iCar做實驗，一探究竟吧！<br><br>
          <TextBox :title="'討論問題舉隅'" :image="'image/materials/logo_think2.png'">
            CUHK iCar如何學會辨識指定人臉？<br>
            用指定人臉的其他角度或照片，CUHK iCar的表現會受影響嗎？爲甚麽？<br>
            在真實情況中應用此技術，會有甚麽好處和限制？<br>
          </TextBox>
        </div>
        <TextTitle :image="'image/materials/logo_handdraw.png'">手畫線循跡實驗</TextTitle>
        <div class="text-content">
          <img src="@/assets/image/gif/gif_line2.gif" style="width: 50%; min-width: 250px"><br>
          自動駕駛車能根據各色虛線、實線移動，從而行走正確路線。<br>
          這是怎麽做到的呢？動手用CUHK iCar做實驗，一探究竟吧！<br><br>
          <TextBox :title="'討論問題舉隅'" :image="'image/materials/logo_think2.png'">
            CUHK iCar跟著手畫線和列印出來的線條行駛會有差異嗎？<br>
            線條的粗幼、大小、形狀等對CUHK iCar行駛有影響嗎？<br>
            CUHK iCar的這項技術在現實生活中有何作用？可應用在哪些地方？<br>
          </TextBox>
        </div>
        <TextTitle :image="'image/materials/logo_download.png'">CUHK iCar資源總匯</TextTitle>
        <div class="text-content" style="display: flex; gap: 50px">
          <DownloadTable :source='download' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CUHK-iCar',
  data(){
    return {
        download: [
          {
            action: 'download',
            name: 'CUHK iCar 教材 (中文版)',
            size: '285 MB',
            type: 'zip',
            url: 'https://download.eduairhk.com/iCar_ZH.zip'
          },
          {
            action: 'download',
            name: 'CUHK iCar Teaching Materials (English Version)',
            size: '261 MB',
            type: 'zip',
            url: 'https://download.eduairhk.com/iCar_EN.zip'
          },
          {
            action: 'download',
            name: 'CUHK iCar micro:bit程式',
            size: '3 MB',
            type: 'zip',
            url: 'https://download.eduairhk.com/iCar_hex.zip'
          },
          {
            action: 'clipboard',
            name: 'MakeCode CUHK iCar擴展庫網址',
            size: '-',
            type: '-',
            url: 'https://github.com/hitkuangye/CUHK_JC_iCar_V2'
          }
        ]
      }
  },
  methods: {
    scroll (index) {
      this.$nextTick(function () {
        window.setTimeout(() => {
          if (index === 0) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          } else {
            const target = this.$refs.content.getElementsByClassName('text-title')[index]
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 1)
      })
    }
  },
  watch: {
    '$route.hash': {
      immediate: true,
      handler (newParams, oldParams) {
        if (newParams) {
          this.scroll(newParams.replace('#', ''))
        }
      }
    }
  }
}
</script>

<style scoped>
  .cuhkicar-wrapper{
    width: 100%; 
    max-width: 1200px;
    height: min-content; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 60px;
  }

  .cuhkicar-container{
    overflow: hidden;
    width: 100%;
    padding: 0 0;
  }

  @media screen and (max-width: 1024px){
    .cuhkicar-wrapper{
      flex-direction: row;
      padding: 0;
    }

    .cuhkicar-container{
      padding: 60px 30px;
    }
  }

  .page-content{
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    width: 100%;
  }

  .page-content .text-content{
    position: relative;
    font-size: 20px;
    line-height: 40px;
    max-width: 100%;
    padding: 45px 0 100px 0;
    width: calc(100% );
  }

  .imageContainer{
    margin-top: 0; width: 300px; height: 300px; padding: 5px 0; background: orange; display: flex; justify-content: center; border-radius: 10px;  align-items: center
  }

  @media screen and (max-width: 1024px) {
    .imageContainer{
      width: 200px; height: 200px;
    }
  }

  @media screen and (max-width: 1150px) {
    .imageContainer{
      width: 250px; height: 250px;
    }
  }

  .imageContainer img{
    transition: all .3s ease-in-out;
  }

  .imageContainer:hover img{
    transform: scale(1.2);
  }
</style>
