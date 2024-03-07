<template>
  <div :class="{en: $i18n.locale == 'en'}" style="overflow: visible; position: absolute; max-width: 100%; min-width: 100%; top: 0; left: 0; display: flex; flex-direction: column; align-items: center; min-height: 100vh">
    <CommonHeader />
    <NuxtPage/>
    <CommonFooter />
  </div>
</template>

<script>
useJsonld({
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "愛動智 EduAIR",
  "url": "https://www.eduairhk.com",
});

useSeoMeta({
  title: '愛動智 EduAIR',
  titleTemplate: '愛動智 EduAIR',
  ogTitle: '愛動智 EduAIR',
  ogImage: 'https://eduairhk.com/favicon.ico',
  description: '愛動智教育系統有限公司由香港中文大學初創種子基金啟動，是一家非牟利機構，董事會成員為香港中文大學深圳研究院院長任揚教授和系統工程與工程管理學蒙美玲教授，致力於以教育為主導，推動年輕人對AI/STEAM的學習和認知，幫助他們在相關領域中實現自己的夢想和抱負。',
  ogDescription: '愛動智教育系統有限公司由香港中文大學初創種子基金啟動，是一家非牟利機構，董事會成員為香港中文大學深圳研究院院長任揚教授和系統工程與工程管理學蒙美玲教授，致力於以教育為主導，推動年輕人對AI/STEAM的學習和認知，幫助他們在相關領域中實現自己的夢想和抱負。',
})

</script>


<style>
*{box-sizing: border-box;}

body{
    font-family: "Noto Sans CJK TC", "Microsoft JhengHei", PingFang,"Gill Sans", sans-serif;
    min-width: 100%;
    color: #666
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.text-container{
    max-width: 1024px;
    text-align: left;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;

}

.text-container:not(:last-child):not(:first-child){
    /* border-bottom: 1px solid gray; */
}

.pageTitle{
    font-weight: 800;
    padding: 15px 0;
}

.pageDescription{
}

.subTitle{
    display: flex;
    align-items: center;
    font-weight: 800;
    padding: 10px 0;
}

.subTitle a{
    max-width: 30px;
    max-height: 30px;
    display: flex;
    margin-left: 10px;
}

.subTitle a img{
    max-width: 30px;
    max-height: 30px;
}


.pageContent-container{
    padding: 60px 0 30px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    height: max-content;
    animation: fadeIn 1s ease-in-out;
    overflow: hidden;
    max-width: 1024px;
}

.font-video-title:not(.en){
    font-size: 60px;
}

.en .font-video-title{
    font-size: 40px;
}

.font-title:not(.en){
    font-size: 40px;
}

.en .font-title{
    font-size: 40px;
}

.font-big:not(.en){
    font-size: 30px;
}

.en .font-big{
    font-size:28px;
}

.font-middle:not(.en){
    font-size: 25px;
}

.en .font-middle{
    font-size: 22px;
}

.font-small:not(.en){
    font-size: 20px;
    line-height: 30px;
}

.en .font-small{
    font-size: 18px;
    line-height: 25px;
}

.font-mini:not(.en){
    font-size: 18px;
}

.en .font-small{
    font-size: 16px;
}

@keyframes fadeIn {
    from {
        opacity: 0.3;
    }
    to {
        opacity: 1;
    }
}

@media screen and (max-width: 1199.9px) {
    .text-container{
        width: 95%;
        max-width: 95%;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }

    .font-video-title:not(.en){
        font-size: 23px;
    }

    .en .font-video-title{
        font-size: 40px;
    }

    .font-big:not(.en){
        font-size: 18px;
    }

    .font-middle{
        font-size: 20px;
    }

    .font-small{
        font-size: 15px;
        line-height: 22px;
    }

    .font-mini:not(.en){
        font-size: 13px;
    }

}


.vue-pdf-embed canvas{
  padding: 10px;
  box-shadow: 100px sienna;
}

</style>
