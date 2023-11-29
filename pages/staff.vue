<template>
    <Head>
        <Title>公司架構</Title>
        <Meta name="description" content="EduAIR由一眾具豐富科技教育經驗的研究者組成，致力推動香港AI/STEAM教育發展。"/>
    </Head>
    <div class="pageContent-container">
        <div class="text-container" style="width: 100%; padding: 20px">
            <label class="pageTitle font-big">董事局成員</label>
            <div class="pageDescription font-small">EduAIR由一眾具豐富科技教育經驗的研究者組成，致力推動香港AI/STEAM教育發展。</div>
        </div>
        <div class="text-container" style="display: flex; flex-direction: row; padding: 0 0 10px 0; justify-content: space-around; flex-wrap: wrap;  flex: 1">
            <StaffNameCard :image="'/image/staff/icon1_1200_circle.jpg'" :title="'蒙美玲教授'" :color="'purple'">
                &#x2022;&emsp;香港中文大學禤永明系統工程與工程管理學教授<br>
                &#x2022;&emsp;香港中文大學博智感知交互研究中心主任<br>
                &#x2022;&emsp;中大賽馬會「智」為未來計劃計劃副負責人、課程發展組主領及評估及分析組副主領<br>
                &#x2022;&emsp;美國麻省理工學院學士、碩士及博士<br>
                &#x2022;&emsp;研究領域：多語言語音、語言處理、人機互動模型、大數據分析等<br>
            </StaffNameCard>
            <StaffNameCard :image="'/image/staff/icon2_1200_circle.jpg'" :title="'任揚教授'" :color="'orange'">
                &#x2022;&emsp;香港中文大學機械與自動化工程學系教授<br>
                &#x2022;&emsp;香港中文大學深圳研究院院長<br>
                &#x2022;&emsp;中大賽馬會「智」為未來計劃首席負責人<br>
                &#x2022;&emsp;美國麻省理工學院航空航天碩士及博士<br>
                &#x2022;&emsp;香港中文大學物理學學士<br>
                &#x2022;&emsp;研究領域：智能系統、控制系統、人體機能學、醫療用機器人等<br>
            </StaffNameCard>
        </div>
        <div class="text-container" style="width: 100%;">
            <label class="pageTitle font-big" style="align-self: flex-start; padding-left: 20px">技術團隊</label>
        </div>
        <div class="text-container" style="display: flex; flex-direction: row; padding: 0 0 10px 0; justify-content: space-around; flex-wrap: wrap;  flex: 1">
            <StaffNameCard :image="'/image/staff/Derek.jpg'" :title="'章文杰 Derek'" :color="'purple'" :youtube="'https://www.youtube.com/@derekcheung7857'">
                &#x2022;&emsp;中大賽馬會「智」為未來計劃技術經理<br>
                &#x2022;&emsp;畢業於香港中文大學機械與自動化工程學系<br>
                &#x2022;&emsp;曾任本地半導體公司科研工作<br>
                &#x2022;&emsp;AI教育：為中小學教師和學生提供AI培訓；研發適用於中小學教育的AI學習套件及展品，現借出予中大AI教育及探索實驗室展出<br>
                &#x2022;&emsp;研究領域：專注AI在藝術方面的研究，曾開發油畫及書法機械人等<br>
            </StaffNameCard>
            <StaffNameCard :image="'/image/staff/staff.jpg'" :title="'團隊成員'" :color="'orange'">
                &#x2022;&emsp;技術副經理：Mr. Michael CHUI<br>
                &#x2022;&emsp;產品工程師：Mr. Heison SO<br>
                &#x2022;&emsp;軟件工程師：Mr. Ben CHAN<br>
            </StaffNameCard>
        </div>
    </div>
</template>

<style>

</style>
