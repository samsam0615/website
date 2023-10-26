<template>
    <Title>公司簡介</Title>
    <Meta name="description" content="愛動智教育系統有限公司(EduAIR)由香港中文大學初創種子基金啟動，是一家非牟利機構，董事會成員為香港中文大學深圳研究院院長任揚教授和系統工程與工程管理學蒙美玲教授，致力於以教育為主導，推動年輕人對AI/STEAM的學習和認知，幫助他們在相關領域中實現自己的夢想和抱負。"/>
    <div class="pageContent-container">
        <div class="banner">
            <label class="layer">
                <div class="description">
                    <div class="title font-big">公司簡介</div>
                    <div class="text font-small">愛動智教育系統有限公司(EduAIR)由香港中文大學初創種子基金啟動，是一家非牟利機構，董事會成員為香港中文大學深圳研究院院長任揚教授和系統工程與工程管理學蒙美玲教授，致力於以教育為主導，推動年輕人對AI/STEAM的學習和認知，幫助他們在相關領域中實現自己的夢想和抱負。</div>
                </div>
            </label>
        </div>
        <div class="font-middle" style="width: 100%; padding: 20px; font-weight: 1000">
            EduAIR的服務
        </div>
        <div class="font-small" style="padding: 0 20px;">
            EduAIR致力構建一個共享學習的平台，提供多元化的服務，幫助學生進一步了解AI和STEAM，讓學生在互動和實踐中更好地理解和應用AI和STEAM相關知識，以激發學生的學習興趣和創造力。
        </div>
        <div class="icon-container" style="">
            <div class="iconBox">
                <nuxt-img src="company1.png" />
                教育工作坊
            </div>
            <div class="iconBox">
                <nuxt-img src="company2.png" />
                顧問服務
            </div>
            <div class="iconBox">
                <nuxt-img src="company3.png" />
                到校服務
            </div>
            <div class="iconBox">
                <nuxt-img src="company4.png" />
                研發教育套件
            </div>
        </div>
        <div style="font-size: 25px; width: 100%; padding: 20px; font-weight: 1000">
            EduAIR的故事
        </div>
        <div style="padding: 0 20px; font-size: 20px">
            EduAIR由一班香港中文大學研究團隊成立，團隊曾開創先河，將AI課題作系統式分類，製作出一套淺白易用的教材，加速AI課題融入中學課程，該套課程現在已經被超過50%的香港中學使用。
        </div>
        <div style="width: 100%; padding: 50px 0">
            <nuxt-img src="timeline3.png" style="width: 100%" />
        </div>
    </div>
</template>

<style scoped>
.banner{
    width: 100%; 
    height: 300px; 
    top: 0;
    overflow: hidden; 
    position: relative;
    background-image: url('~/assets/image/event3.jpg');
    background-position-y: 600px;
    background-size: 1200px auto;
}

.banner .layer{
    position: absolute; 
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    background: rgba(255, 255, 255, 0.5);
}

.banner .layer .description{
    color: #6d0e77; 
    position: relative; 
    width: 65%;
    height: 80%;
    z-index: 1;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 10px;
}

.banner .layer .description .title{
    color: #6d0e77; 
    position: relative; 
    z-index: 1;
    top: 0;
    left: 0;
    font-weight: 600;
    padding: 0 0 10px 0;
}

.banner .layer .description .text{
    
}

.icon-container{
    display: flex; justify-content: space-around; width: 100%; padding: 20px 0;
}

.iconBox{
    position: relative;
    width: 175px; 
    height: 175px; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px;
    color: #6d0e77;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(0);
    transition: all 0.5 ease-in;
    font-weight: 600;
}

.iconBox img{
    padding: 20px;
    height: 120px;
}

@media screen and (max-width: 1200px) {
    .banner{
        width: 100%;
        max-width: 100%;
        background-position-x: 50%;
    }

    .banner .layer .description{
        width: 100%;
        padding: 15px;
    }

    .icon-container{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
    }

    .iconBox{
        position: relative;
        width: 140px; 
        height: 140px; 
        margin: 0;
    }

}

/* .iconBox div{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 0, 0, 0.5);
    transition: all .5s ease-in-out;
}
.iconBox:hover{
    transform: translateY(-50%);
}
.iconBox:hover div{
    transform: translateY(100%);
} */
</style>
