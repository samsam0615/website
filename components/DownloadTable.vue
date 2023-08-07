<template>
    <div class="download-table">
        <div class="download-table-row">
            <div>名稱</div>
            <div>類型</div>
            <div>大小</div>
            <div style="justify-content: center">下載點</div>
        </div>
        <div class="download-table-row" v-for="item in source" :key="item">
            <div>{{item.name}}</div>
            <div>{{item.type}}</div>
            <div>{{item.size}}</div>
            <div>
                <a :href="item.url" style="height: 80%" v-if="item.action == 'download'">
                    <img :src="'image/materials/icon_download.png'" height="80%">
                </a>
                <a style="height: 80%; cursor: pointer" v-if="item.action == 'clipboard'" @click="copy(item.url)">
                    <img :src="'image/materials/icon_copy.png'" height="80%">
                </a>
            </div>     
        </div>
    </div>
</template>

<script>
export default {
  name: 'DownloadTable',
  props: ['source'],
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
.download-table{
    width: 750px;
    height: max-content;
    display: flex;
    flex-direction: column;
    color: #5b2700;
    font-size: 15px;
    line-height: 15px;
}

.download-table-row{
    width: 100%;
    min-height: 40px;
    padding: 20px 0;
    background: blanchedalmond;
    display: flex;
}

.download-table-row div:nth-child(1){
    width: 50%;
    padding-left: 20px;
    justify-content: flex-start;
}

.download-table-row div:nth-child(2){
    width: 15%;
}

.download-table-row div:nth-child(3){
    width: 15%;
}

.download-table-row div:nth-child(4){
    width: 20%;
}

.download-table-row:nth-child(1){
    background: #ffa500;
}

.download-table-row div{
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
</style>