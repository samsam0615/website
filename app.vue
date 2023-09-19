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
    max-width: 1200px;
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
    max-width: 1200px;
}

.font-big{
    font-size: 30px;
}

.font-middle{
    font-size: 25px;
}

.font-small{
    font-size: 20px;
    line-height: 30px;
}

.font-mini{
    font-size: 18px;
}

@keyframes fadeIn {
    from {
        opacity: 0.3;
    }
    to {
        opacity: 1;
    }
}

@media screen and (max-width: 1200px) {
    .text-container{
        width: 95%;
        max-width: 95%;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }

    .font-big{
        font-size: 25px;
    }

    .font-middle{
        font-size: 20px;
    }

    .font-small{
        font-size: 15px;
        line-height: 22px;
    }

    .font-mini{
        font-size: 15px;
    }

}


.vue-pdf-embed canvas{
  padding: 10px;
  box-shadow: 100px sienna;
}

</style>
