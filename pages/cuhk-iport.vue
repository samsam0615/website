<template>
  <Title>CUHK iPort</Title>
  <Meta name="description" content="CUHK iPort是為實現AI物聯網（AIoT）而設的AI教學套件，讓學生輕鬆創建不同AI機械項目。"/>
  <PageCatalog4 :list='["CUHK iPort", "功能介紹", "使用說明", "實驗範例", "編程平台", "實用資源總匯"]' style="z-index: 1"/>
  <div class="pageContent-container" style="z-index: 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; padding: 30px; overflow: visible; width: 1000px; max-width: 100%" >
    <div class="page-content" ref="content">
      <span class="title">CUHK iPort</span>
      <div class="text-content" style="display: flex; justify-content: center; width: 100%"> 
      <iPortImage/>
      </div>
      <span class="title">功能介紹</span>
      <div class="text-content">
        CUHK iPort是由中大團隊開發的AI教學套件。師生可省略複雜的硬件搭綫步驟，使用iPort編程平台，套用於Teachable Machine訓練的AI模型，無須編程即可實現AI物聯網（AIoT） ， 建立不同的AI項目。
        <nuxt-img src="iportDesc4.png" style="width: 100%; max-width: 900px;"/>
      </div>
      <span class="title">使用說明</span>
      <div class="text-content">
        <iPortVideoPlayer />
      </div>
      <span class="title">實驗範例</span>
      <div class="text-content">
        即將推出
      </div>
      <span class="title">編程平台</span>
      <div class="text-content">
        <a href="https://iport.eduairhk.com" target="_blank" class="btn">前往CUHK iPort編程平台</a>
      </div>
      
      <span class="title">實用資源總匯</span>
      <div class="text-content">
        即將推出
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
    font-size: 30px;
    font-weight: 700;
    padding: 30px 0 30px 0;
    scroll-margin-top: 40px;
    color: #888888
  }

  .page-content div{
    font-size: 20px;
    line-height: 40px;
  }

  .btn{
    font-size: 16px;
    display: flex; width: max-content; height: 50px; align-items: center; width: 200px; justify-content: center; border-radius: 10px; border: 3px solid orange; color: orange; text-decoration: none
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
    font-size: 20px;
    line-height: 40px;
    max-width: 100%;
    padding: 0 0 20px 0;
    width: calc(100% );
  }

  
</style>

<script>
export default {
  name: 'CUHK-iPort',
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
  }
}
</script>
