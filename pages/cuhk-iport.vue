<template>
  <Title>CUHK iPort</Title>
  <Meta name="description" content="CUHK iPort是為實現AI物聯網（AIoT）而設的AI教學套件，讓學生輕鬆創建不同AI機械項目。"/>
  <PageCatalog4  style="z-index: 1"/>
  <div class="pageContent-container" style="z-index: 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; padding: 30px; overflow: visible; max-width: 1200px; width: 100%" >
    <div class="page-content" style="width: 100%" ref="content">

      <span class="title font-big">iPort是甚麼？</span>
      <div class="text-content font-small" style="display: flex; justify-content: center; width: 100%"> 
      <iPortImage/>
      </div>
      <div class="text-content font-small">
        CUHK iPort是由中大團隊開發的AI教學套件。師生可省略複雜的硬件搭綫步驟，使用iPort編程平台，套用於Teachable Machine訓練的AI模型，無須編程即可實現AI物聯網（AIoT） ， 建立不同的AI項目。
        <nuxt-img src="iportDesc6.png" style="width: 100%; max-width: 900px;"/>
      </div>

      <span class="title font-big">如何使用iPort？</span>
      <iPortVideoPlayer />

      <span class="title font-big">警報系統</span>
      <div class="text-content font-small" >
        <video ref="myVideo1" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
            <source :src="'iport5.mp4'" type="video/mp4">
        </video>
        <br>
        使用Teachable Machine 訓練AI 圖片識別模型檢測禁區大門有人及無人的情景。透過iPort 平台上簡單設置顯示安全提示及聲音燈光等效果，只要有人經過禁區大門，iPort 就會發出警報，提醒誤闖人士離開。
        <br><br>
        <TextBox :title="'討論問題舉隅'" :image="'image/materials/logo_think2.png'">
          任何人經過禁區大門都會觸發警報系統嗎？可以只讓授權人士通過嗎？<br>
          為何天黑後警報系統就會被觸發？如何避免誤觸發的情況？<br>
          在訓練「有人」的情景時，假設只用同學A經過禁區的圖片，有足夠數據作為識別有人的情景嗎？<br>
        </TextBox>
      </div>


      <span class="title font-big">手勢控制小車</span>
      <div class="text-content font-small">
        <div class="font-middle" style="padding: 10px 0">製作教學</div>
        <div style="display: flex; flex-wrap: wrap">
          <video ref="myVideo2" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
            <source :src="'iport7.mp4'" type="video/mp4">
          </video>
          <div style="padding: 20px 20px 0 20px"> 
            所需材料： <br>
            1. 廢棄紙皮 <br>
            2. 膠樽樽蓋 <br>
            3. 膠紙 <br>
            4. CUHK iPort <br>
            5. 360電機 * 2 <br>
          </div>
        </div>
        <br>
        <div class="font-middle" style="padding: 10px 0">實驗示範</div>
        <video ref="myVideo3" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
          <source :src="'iport1.mp4'" type="video/mp4">
        </video><br>
        在Teachable Machine 上訓練好自己喜歡的手勢識別模型後，就可以透過攝像頭以手勢控制小車飛馳。空曠環境下無線控制距離可達50米。大家不妨比賽誰的小車最快離開迷宮。
        <br><br>
        <TextBox :title="'討論問題舉隅'" :image="'image/materials/logo_think2.png'">
          手勢識別除了可以玩小車比賽外，還可以用到哪些生活應用上？<br>
          Teacheble Machine 上利用圖片識別手勢與傳統的手勢識別技術有甚麼不同？<br>
          怎樣收集數據才能使小車得到更好的控制？<br>
        </TextBox>
      </div>
      
      <span class="title font-big">聲控開關</span>
      <div class="text-content font-small">
        <video ref="myVideo4" autoplay muted loop playsinline webkit-playsinline style="width: 100%; max-width: 750px">
            <source :src="'iport2.mp4'" type="video/mp4">
        </video>
        <br>
        iPort配件中的電動手指能夠做到類似真實手指推拉的動作，對於行動不便人士可以利用訓練聲音識別模型，利用簡單的聲控指令便能控制家中的任意按鍵開關。有障礙的室內環境下無線控制距離仍可達15米。
        <br><br>
        <TextBox :title="'討論問題舉隅'" :image="'image/materials/logo_think2.png'">
          如何能提升Teachable Machine 中的聲控準確性呢？<br>
          語言障礙者有甚麼辦法能夠控制電動手指？<br>
          聲控識別的最大困難是容易受到噪音影響，電動手指可能因而發生誤觸情況，我們如何避免噪音的影響？<br>
        </TextBox>
      </div>

      <span class="title font-big">iPort編程平台</span>
      <div class="text-content font-small">
        <div style="width: 100%; max-width: 900px; background: red; padding: 0; height: min-content; display: flex ">
          <img :src="'iportui.png'" style="width: 100%; height: auto; padding: 0">
          <div style="width: 100%; height: 100%; background: white; opacity: 0.5; position: absolute; top: 0"></div>
          <a href="https://iport.eduairhk.com" target="_blank" class="btn"
            style="position: absolute; top: 50%; left: 50%; transform: translate(-100%, -50%)">前往iPort編程平台</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page-content{
    display: flex;
    flex-direction: column;
    padding-top: 30px;
  }

  .page-content span{
    font-weight: 700;
    padding: 30px 0 30px 0;
    scroll-margin-top: 40px;
    color: #888888
  }

  .page-content div{
    line-height: 40px;
  }

  .btn{
    display: flex; width: max-content; height: 50px; align-items: center; width: 200px; justify-content: center; border-radius: 10px; border: 3px solid orange; color: orange; text-decoration: none;
    background: orange;
    color: white;
  }

  .btn:hover{
    background: orange;
    color: white;
  }

  .orangeBtn{
    background: orange;
    padding: 0 20px;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    height: 60px;
  }

  .orangeBtn:hover{
    background: rgb(235, 153, 0);
  }

  .page-content .text-content{
    position: relative;
    line-height: 40px;
    max-width: 100%;
    padding: 0 0 20px 0;
    width: calc(100% );
  }


</style>

<script>
export default {
  name: 'CUHK-iPort',
  data () {
    return {
      viewWidth: 1024
    }
  },
  methods: {
    scroll (index) {
      this.$nextTick(function () {
        window.setTimeout(() => {
          if (index === 0) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          } else {
            const target = this.$refs.content.getElementsByTagName('span')[index]
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 1)
      })
    },
    vw (percent) {
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      return (percent * w) / 100;
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
  },
  mounted () {
    this.$refs.myVideo1.play()
    this.$refs.myVideo2.play()
    this.$refs.myVideo3.play()
    this.$refs.myVideo4.play()


    const self = this;
    this.viewWidth = this.vw(50);

    const resizeObserver = new ResizeObserver(entries => {
        self.viewWidth = Math.min(self.vw(50), 1024);
        self.viewWidth = Math.max(self.viewWidth, 300);
      }
    )

    // start observing a DOM node
    resizeObserver.observe(document.body)

  }
}
</script>
