<template>
  <Title>CUHK iPort</Title>
  <div class="pageContent-container" style="flex-direction: row; justify-content: flex-start; align-items: flex-start; padding: 60px " >
    <PageCatalog @click="scroll" :title='"CUHK iPort"' :list='["iPort是甚麽？", "如何使用iPort？", "iPort編程平台", "iPort資源總匯"]' />
    <div class="page-content" ref="content">
      <span>CUHK iPort是甚麽？</span>
      <div>
        CUHK iPort是由中大科研團隊開發的AI教學套件。團隊洞悉到部分學生有缺乏STEM搭綫技能的困難，研發出iPort，讓師生省略搭綫步驟也可在硬件上套用AI模型。師生只要使用iPort編程平台，便可以套用於Teachable Machine訓練的AI模型，讓硬件根據自行設定的條件作出反應，無須編程即可實現AI物聯網（AIoT）
      </div>
      <span>如何使用CUHK iPort？</span>
      <div>
        1. 在Teachable Machine訓練AI模型及生成AI模型的連結<br>
        2. 將AI模型的連結複製及貼上至iPort編程平台<br>
        3. 應用該AI模型去操作虛擬或實體的iPort
      </div>
      <span>CUHK iPort編程平台</span>
      <a href="https://iport.eduairhk.com" target="_blank" class="btn">前往 iPort編程平台</a>
      <div>
      </div>
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
