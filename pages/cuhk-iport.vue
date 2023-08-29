<template>
  <Title>CUHK iPort</Title>
  <Meta name="description" content="CUHK iPort是為實現AI物聯網（AIoT）而設的AI教學套件，讓學生輕鬆創建不同AI機械項目。"/>
  <div class="pageContent-container" style="flex-direction: row; justify-content: flex-start; align-items: flex-start; padding: 60px; overflow: visible;" >
    <PageCatalog @click="scroll" :title='"CUHK iPort"' :list='["CUHK iPort是甚麽？", "CUHK iPort能做甚麼？", "如何使用CUHK iPort？", "CUHK iPort編程平台", "CUHK iPort資源總匯"]' />
    <div class="page-content" ref="content">
      <span>CUHK iPort是甚麽？</span>
      <div>
        CUHK iPort是由中大團隊開發的AI教學套件。師生可省略複雜的硬件搭綫步驟，使用iPort編程平台，套用於Teachable Machine訓練的AI模型，無須編程即可實現AI物聯網（AIoT） ， 建立不同的AI項目。
      </div>
      <img src="@/assets/image/iport/image1.png" style="position: relative; width: 500px; margin-top: 5px">
      <span>CUHK iPort能做甚麼？</span>
      <div style="display: flex; gap: 20px">
        <OrangeDescription :image="'image/iport/image6.gif'">馬達控制</OrangeDescription>
        <OrangeDescription :image="'image/iport/image5.png'">文字顯示</OrangeDescription>
        <OrangeDescription :image="'image/iport/image52.png'">聲音輸出</OrangeDescription>
        <OrangeDescription :image="'image/iport/image3.gif'">燈光展示</OrangeDescription>
        <OrangeDescription :image="'image/iport/image22.gif'">開關控制</OrangeDescription>
      </div>
      <span>如何使用CUHK iPort？</span>
      <div style="display: flex; gap: 20px; flex-direction: column">
        <!-- <Youtube src="https://www.youtube.com/watch?v=jNQXAC9IVRw" /> -->
        
        <OrangeVideo :image="'image/iport/image7.gif'" :title="'在Teachable Machine訓練AI模型及生成連結'" :number="1">
          <a class="orangeBtn" href="https://teachablemachine.withgoogle.com/" target="_blank">前往Teachable Machine</a>
        </OrangeVideo>
        <OrangeVideo :image="'image/iport/image8.gif'" :title="'將AI模型的連結複製至iPort編程平台'" :number="2">
          <a class="orangeBtn" href="https://iport.eduairhk.com/" target="_blank">前往CUHK iPort編程平台</a>
        </OrangeVideo>
        <OrangeVideo :image="'image/iport/image9.gif'" :title="'應用該AI模型去控制不同硬件'" :number="3">
        </OrangeVideo>
      </div>
      <span>CUHK iPort編程平台</span>
      <a href="https://iport.eduairhk.com" target="_blank" class="btn">前往 iPort編程平台</a>
      <span>CUHK iPort實用資源總匯</span>
      <div>
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
    display: flex; width: max-content; height: 50px; align-items: center; width: 200px; justify-content: center; border-radius: 10px; border: 3px solid orange; color: orange; text-decoration: none
  }

  .btn:hover{
    background: #ececec;
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
