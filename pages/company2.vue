<template>
  <Head>
    <Title>公司簡介</Title>
    <Meta name="description" content="愛動智教育系統有限公司由香港中文大學初創種子基金啟動，是一家非牟利機構，董事會成員為香港中文大學深圳研究院院長任揚教授和系統工程與工程管理學蒙美玲教授，致力於以教育為主導，推動年輕人對AI及STEAM的學習和認知，幫助他們在相關領域中實現自己的夢想和抱負。"/>
  </Head>
  <div class = "pageContent-container">
    <div class="text-container" >
      <label class="pageTitle">公司簡介</label><br>
      <div class="pageDescription">愛動智教育系統有限公司由香港中文大學初創種子基金啟動，是一家非牟利機構，董事會成員為香港中文大學深圳研究院院長任揚教授和系統工程與工程管理學蒙美玲教授，致力於以教育為主導，推動年輕人對AI及STEAM的學習和認知，幫助他們在相關領域中實現自己的夢想和抱負。</div>
    </div>
    <div class="text-container">
      <label class="subTitle">EduAIR 的服務<br></label><br>
      <div class="pageDescription">為實現上述目標，EduAIR提供多元化的服務，包括舉辦教育活動、到校服務、研發教學套件、AI/STEAM 實驗室設計及裝修等。EduAIR致力構建一個共享學習的平台，幫助學生進一步了解AI/STEAM。</div> <br>
      <div class="pageDescription" style="padding-bottom: 40px; align-self: flex-end">
        <div style="display: flex; flex-direction: column">
          <label style="font-weight: 800; margin-bottom: 15px; font-size: 24px;">
            提供教育活動和到校服務
          </label>
          EduAIR的課程涵蓋各個年齡層，包括幼兒、小學和中學生，為不同年齡層的學生提供最合適的學習體驗。此外，EduAIR舉辦工作坊、比賽等各類活動，以激發學生的學習興趣和創造力。
        </div>
        <br>
        <div style="display: flex; flex-direction: column; align-self: flex-end">
          <label style="font-weight: 800; margin-bottom: 15px; font-size: 24px;">
            研發教學套件和AI 實驗室
            <br>
          </label>
          EduAIR根據學生的能力和學習目標，量身打造教學套件和實驗室，讓學生在互動和實踐中更好地理解和應用AI/STEAM相關知識。
        </div>
      </div>
          <div class="card-container-center">
            <PictureCard :title='"培訓工作坊"' :symbol='"home_repair_service"' >課堂内容貼近生活，讓老師和學生緊貼AI的最新趨勢</PictureCard>
            <PictureCard :title='"顧問服務"' :symbol='"support_agent"' >為學校和團體度身訂造AI實驗室展品及訓練班</PictureCard>
            <PictureCard :title='"學習套件研發"' :symbol='"memory"' >設計易上手，涵蓋多元課題</PictureCard>
          </div>
      </div>
      <div class="text-container">
          <label class="subTitle">EduAIR 的故事</label><br>
          <div class="subDescription">
              愛動智教育系統是一間教育科技初創公司，成立公司的香港中文大學研究團隊開創先河，將AI課題作系統式分類，製作出一套淺白易用的教材，加速AI課題融入學校課程。
          </div>
          <br><br>
          <img src="@/assets/image/timeline.png" style="width: 100%">
      </div>
  </div>
</template>
