<template>
  <div style="overflow: visible; position: absolute; max-width: 100%; min-width: 100%; top: 0; left: 0; display: flex; flex-direction: column; align-items: center; min-height: 100vh">
    <CommonHeader />
    <!-- <CommonFund /> -->
    <NuxtPage  />
    <CommonFooter />
  </div>
</template>

<style>
*{box-sizing: border-box;}

body{
    font-family: "Gill Sans", sans-serif;
    min-width: 100%;
    
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
    max-width: 1200px;
    padding: 2% 2%;
    text-align: left;
    height: 100%;
    display: flex;
    flex-direction: column;

}

.text-container:not(:last-child):not(:first-child){
    /* border-bottom: 1px solid gray; */
}

.pageTitle{
    font-size: 33px;
    font-weight: 800;
    padding: 15px 0;
}

.pageDescription{
    font-size: 22px;
    padding: 0 0 15px 0;
}

.subTitle{
    font-size: 30px;
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

.subDescription{
    margin-top: 15px;
    font-size: 23px;
}

.pageContent-container{
    padding: 60px 0 30px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    height: max-content;
    animation: fadeIn 2s;
    overflow: hidden;
    max-width: 1366px;
}

@media screen and (max-width: 1200px) {
    .text-container{
        width: 95%;
        max-width: 95%;
    }
    .pageTitle{
        font-size: 1.75rem;
    }
    .pageDescription{
        font-size: 1.25rem;
    }
    .subTitle{
        font-size: 27px;
        font-weight: 500;
    }
    .subDescription{
        font-size: 1.20rem;
    }
}

@media screen and (max-width: 1024px) {
    .text-container{
        width: 95%;
        max-width: 95%;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }
}

.vue-pdf-embed canvas{
  padding: 10px;
  box-shadow: 100px sienna;
}

</style>
