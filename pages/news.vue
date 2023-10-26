<template>
    <Title>最新消息</Title>
    <Meta name="description" content=""/>
    <div class="pageContent-container" style="max-width: 100%; width: 1024px; justify-content: center;">
        <div class="banner">
            <label class="title font-big">
                最新消息
            </label>
        </div>
        <div class="text" > 
            <div class="border"> 
                <div class="font-middle" style="color: #6d0e77; font-weight: 600; padding: 0 0 0px 0;">
                    <a  style="text-decoration-color: blue ;color: blue"
                    target="_blank"
                    href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&lang=zh">
                        [🔥立即報名]
                    </a>
                    STEAM教育學與教和評估系列
                </div>
                <div class="font-small" style="color: #6d0e77; font-weight: 600; padding: 0 0 15px 0;">初中人工智能課程單元應用實踐工作坊</div>
                <div class="font-mini" style="line-height: 30px;"> 
                香港教育局於今年6月推出「初中人工智能課程單元」，學校需要每年安排約10至14小時教授相關內容，讓學生能從小了解AI，培養及加強他們學習創新科技的興趣及能力。
                <br><br>
                教育局於本年9月底起舉辦相關的教師培訓課程(STEAM教育學與教和評估系列：初中人工智能課程單元應用實踐工作坊)，邀請500家學校共1000位中學老師參與工作坊，工作坊合共舉辦20場，每場6小時。增加老師對教學課程單元及使用相關學習套件的認識。
                <br><br>
                EduAIR將與教育局合作，向學校提供AI教學套件 - CUHK iCar及CUHK iPort，本公司亦會派出技術專才擔任培訓課程的講師。
                <br><br>
                <a  style="text-decoration-color: blue ;color: blue"
                    target="_blank"
                    href="https://tcs.edb.gov.hk/tcs/admin/courses/previewCourse/forPortal.htm?courseId=CSD020240360&lang=zh">教師培訓課程詳情</a>
                </div>
            </div>
        </div>

        <div style="width: 100%; padding: 10px 20px; max-width: 1024px;">
            <div class="font-big" style="align-self: flex-start; padding: 20px 0; font-weight: 600">活動回顧 🗓️</div>
            <div style="display: flex; flex-wrap: wrap; row-gap: 20px; max-width: 1024px;">
                <Gallery2 
                    :title="'初中人工智能課程單元應用實踐工作坊（共20場）'"
                    :subtitle="'香港教育局STEAM教育學與教和評估系列'"
                    :url="'/event/4'"
                    :image="'event/event4/1.jpg'"
                    :date="'2023 年 9 月起'">
                </Gallery2>
                <Gallery2 
                    :title="'「危機解除」工作坊'"
                    :subtitle="'人工智能教育及探索實驗室開放日'"
                    :url="'/event/1'"
                    :image="'event/event1/2.jpg'"
                    :date="'2023 年 8 月 17 - 18 日'">
                </Gallery2>
                <Gallery2 
                    :title="'「iCar達人」工作坊'"
                    :subtitle="'人工智能教育及探索實驗室開放日'"
                    :url="'/event/2'"
                    :image="'event/event2/3.jpg'"
                    :date="'2023 年 8 月 17 - 18 日'">
                </Gallery2>
                <Gallery2 
                    :title="'「iCar達人」工作坊'"
                    :subtitle="'「智」為未來暑期訓練營 2023'"
                    :url="'/event/3'"
                    :image="'event/event3/2.jpg'"
                    :date="'2023 年 7 月 18 - 19 日'">
                </Gallery2>
            </div>
        </div>

<!--         <Gallery :title="'「危機解除」工作坊'" 
                :subtitle="'人工智能教育及探索實驗室開放日'"
                :images="['event/event1/3.jpg', 'event/event1/2.jpg', 'event/event1/1.jpg', 'event/event1/4.jpg', 'event/event1/5.jpg', ]">
            EduAIR與中大賽馬會「智」為未來計劃於2023年8月17及18日在香港中文大學合辦人工智能教育及探索實驗室開放日，有二十多個不同的AI機械人展品供公眾參觀，例如AI油畫機、AI書法機械人、AI氣墊球機械人、AI鋼琴二重奏等。另外還舉辦了4埸「危機解除」工作坊，超過60位公眾以拆彈專員的身分拆解模擬定時炸彈，他們使用各種工程工具與團隊合作共同解除危機。
        </Gallery>
        <Gallery :title="'「iCar達人」工作坊'" 
                :subtitle="'人工智能教育及探索實驗室開放日'"
                :images="['event/event2/1.jpg', 'event/event2/2.jpg', 'event/event2/3.jpg', 'event/event2/4.jpg', 'event/event2/5.jpg', ]">
            EduAIR與中大賽馬會「智」為未來計劃於2023年8月17及18日在香港中文大學合辦人工智能教育及探索實驗室開放日，有二十多個不同的AI機械人展品供公眾參觀，例如AI油畫機、AI書法機械人、AI氣墊球機械人、AI鋼琴二重奏等等。除參觀之外，還舉辦了4場「iCar達人」工作坊，超過90位公眾利用我們研發的CUHK iCar作教學套件，透過編程及程式設計邏輯，成功完成人面識別追蹤的AI實驗。
        </Gallery>
        <Gallery :title="'「iCar達人」工作坊'" :subtitle="'「智」為未來暑期訓練營 2023'" 
                :images="['event/event3/4.jpg', 'event/event3/2.jpg', 'event/event3/3.jpg', 'event/event3/1.jpg', 'event/event3/5.jpg', ]">
            EduAIR 與中大賽馬會「智」為未來計劃於2023年7月18至19日在香港中文大學合辦了「智」為未來暑期訓練營 2023，短短兩天舉辦了20場豐富精彩的活動，當中包括「AI基礎班」，「Python 編程班」，「參觀AI實驗室」及「iCar達人」等，其中在「iCar達人」使用了我們研發的CUHK iCar ，並向98名香港初中學生教授編程及程式設計邏輯，所有學生都成功完成人面識別追蹤及道德困境的AI實驗，使他們對AI有更好的認識。
        </Gallery> -->

    </div>
</template>

<style scoped>
.banner{
    width: 100%; 
    height: 300px; 
    top: 0;
    overflow: hidden; 
    position: relative;
    background-image: url('~/assets/image/banner2.jpg');
    background-position-x: -100px;
    background-position-y: 600px;
    background-size: 1200px auto;
}

.banner img {
    width: 100%;
    top: 100px;
    object-position: 0 -200px
}
.banner .title{
    color: #6d0e77; 
    font-size: 40px; 
    font-weight: 800; 
    position: absolute; 
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
}

.text{
    display: flex;
    flex-direction: column;
    width: 1024px; 
    padding: 20px; 
    height: max-content; 
    max-width: 90%; position: relative;
    justify-content: center;
    align-items: center;
}

.text .border{
    padding: 20px; border: 5px solid #6d0e77; border-radius: 20px; width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

@media screen and (max-width: 1200px) {
    .banner{
        width: 100%;
        max-width: 100%;
        background: auto 300px;
        background-position-x: 50%;
        background-position-y: 50%;
    }

    .text{
        padding: 0;
    }

    .text .border{
        padding: 20px; 
        border: none; border-radius: 20px; 
    }

    
}
</style>
