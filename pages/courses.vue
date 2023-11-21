<template>
    <Title>到校課程</Title>
    <Meta name="description" content="按此查看到校課程"/>
    <div class="pageContent-container" style="max-width: 100%; width: 1024px; justify-content: center; min-height: 100%; justify-content: flex-start; align-items: center">
        <div class="banner">
            <label class="title font-big">
                到校課程
            </label>
        </div>
        <div class="text" style="padding: 60px"> 
            <NuxtLink to="/contact" style="text-decoration: none">
            <div style="margin-top: 30px; padding: 20px; font-size: 20px; background: orange; color: white; border-radius: 10px; cursor: pointer; display: flex; justify-content: center; min-width: max-content"> 
                聯絡我們&ensp;瞭解更多
            </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.banner{
    width: 100%; 
    height: 300px; 
    overflow: hidden; 
    position: relative;
    background-image: url('~/assets/banner4.jpg');
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
