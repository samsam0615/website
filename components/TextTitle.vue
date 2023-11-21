<template>
    <div class="text-title">
        <div style="height: 100%; display: flex; align-items: center">
            <img class="icon" :src="image">
            <slot/>
        </div>
        <div  class="download-button-container" v-if="isShowDownload"> 
            <div style="font-size: 20px; padding: 10px">下載教材</div>
            <img :src="'/image/download.svg'" style="width: 30px;">
            <div class="hover" style="color: #565656;">
                <a class="download-button" :href="chiUrl"> 
                    中
                </a>
                <a class="download-button" :href="engUrl">
                    Eng
                </a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'TextTitle',
  props: ['image', 'isShowDownload', 'chiUrl', 'engUrl'],
  methods:{
    copy(content){
        /* navigator.clipboard.writeText("https://github.com/hitkuangye/CUHK_JC_iCar_V2"); */
        alert("Link copied");

        var textarea = document.createElement("textarea");
        textarea.value = content;
        textarea.display = "none";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    },
  }
}
</script>


<style scoped>
.text-title {
    background: orange;
    color: white;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 700;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* scroll-margin-top: 40px; */
    scroll-margin-top: 200px;
    width: max-content;
    padding: 0 30px 0 30px;
    max-width: 100%;
    width: calc(100% );
    margin-top: 20px;
    margin-bottom: 20px;
    z-index: 1;
}

.icon{
    height: 70%; 
    margin-right: 30px
}

.download-button-container{
    width: 140px; height: 60px; 
    display: flex; position: relative;
    align-items: center;
    justify-content: flex-end;
}

.download-button{
    color: white; background: #565656; border-radius: 10px; width: 50px; height: 40px; font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
}
.hover{
    position: absolute;
    top: -40px;
    transform: translate(0, 100%);
    width: 105px;
    display: none;
    justify-content: space-between;
    padding: 20px 0;
}

.download-button-container:hover .hover{
    display: flex;
}

@media screen and (max-width: 1200px){
    .text-title{
        height: 70px;
        font-size: 21px;
        line-break: auto;
        padding: 0 10px;
    }

    .text-title img{
        margin-left: 20px;
        margin-right: 20px;
    }

    .download-button-container{
        display: none;
    }
}
</style>