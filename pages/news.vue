<template>
    <Title>最新消息</Title>
    <div class="pageContent-container">
        <div class="banner">
            <nuxt-img src="banner2.jpg" />
            <label class="title font-big">
                最新消息
            </label>
        </div>
        <Gallery></Gallery>
    </div>
</template>

<style scoped>
.banner{
    width: 100%; 
    height: 300px; 
    top: 0;
    overflow: hidden; 
    position: relative
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
</style>
