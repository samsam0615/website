<template>
    <div class="text-title">
        <img :src="image">
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'TextTitle',
  props: ['image'],
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
    align-items: center;
    /* scroll-margin-top: 40px; */
    scroll-margin-top: 200px;
    width: max-content;
    padding: 0 30px;
    max-width: 100%;
    width: calc(100% );
    margin-top: 20px;
    margin-bottom: 20px;
}

.text-title img{
    height: 70%; 
    margin-right: 30px
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
}
</style>