<template>
    <div class="container pc" > 
        <div style="height: 300px; border-radius: 20px; padding: 20px 0; display: flex; flex-direction: column; border: 1px solid #c0c0c0; background: orange"> 
            <span class="font-small" @click="id = 0" :class="{active: id == 0}">1. 訓練AI模型及生成連結</span>
            <span class="font-small" @click="id = 1" :class="{active: id == 1}">2. 上載模型至編程平台</span>
            <span class="font-small" @click="id = 2" :class="{active: id == 2}">3. 操作CUHK iPort或模擬器</span>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; padding: 0 20px;"> 
            <div style="position: relative; width: 550px; height: 300px; background: white;">
                <iframe :src="src[id]"
                style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%; border-radius: 10px; " 
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen="true"
            ></iframe>
            </div>
        </div>
    </div>
    <div class="container mobile"> 
        <div style="width: 100%; border-radius: 20px; padding: 20px 0; display: flex; flex-direction: column; border: 1px solid #c0c0c0; background: orange"> 
            <span class="font-small" @click="id = 0" :class="{active: id == 0}">1. 訓練AI模型及生成連結
                <div v-show="id == 0" style="position: relative; width: 100%; height: 300px;">
                    <iframe :src="src[0]"
                    style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%; border-radius: 10px; " 
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowfullscreen="true"
                    preload="true" />
                </div>
            </span>
            <span class="font-small" @click="id = 1" :class="{active: id == 1}">2. 上載模型至編程平台
                <div v-show="id == 1" style="position: relative; width: 100%; height: 300px;">
                <iframe :src="src[1]"
                style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%; border-radius: 10px; " 
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen="true"
                preload="true" />
            </div>
            </span>
            <span class="font-small" @click="id = 2" :class="{active: id == 2}">3. 操作CUHK iPort或模擬器
                <div v-show="id == 2" style="position: relative; width: 100%; height: 300px;">
                <iframe :src="src[2]"
                    style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%; border-radius: 10px; " 
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowfullscreen="true"
                    preload="true" />
                </div>
            </span>
        </div>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        max-width: 1000px;
        min-height: 300px; 
        border-radius: 10px; 
        display: flex;
    }

    .container span{
        color: white; 
        padding: 10px 30px;
        cursor: pointer; 
        display: flex;
        flex-direction: column;
    }

    .container span:hover, .container span.active{
        color: orange;
        cursor: pointer; 
        background: white;
    }

    @media screen and (max-width: 1199px) {
        .pc{
            display: none;
        }
    }

    @media screen and (min-width: 1200px) {
        .mobile{
            display: none;
        }
    }

</style>

<script>
    export default {
    name: 'iPortVideoPlayer',
    data () {
        return {
            id: 0,
            src: [
                "https://customer-9nuyiwcobdv6cl6j.cloudflarestream.com/89ea8daf916aae4b7067e73ded4ca451/iframe?muted=true&preload=true&poster=https%3A%2F%2Fcustomer-9nuyiwcobdv6cl6j.cloudflarestream.com%2F89ea8daf916aae4b7067e73ded4ca451%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
                "https://customer-9nuyiwcobdv6cl6j.cloudflarestream.com/0823d274d9f5930890f80879bf38681d/iframe?muted=true&preload=true&poster=https%3A%2F%2Fcustomer-9nuyiwcobdv6cl6j.cloudflarestream.com%2F0823d274d9f5930890f80879bf38681d%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
                "https://customer-9nuyiwcobdv6cl6j.cloudflarestream.com/30b00d5cf6ff27876552582572ba07c7/iframe?muted=true&preload=true&poster=https%3A%2F%2Fcustomer-9nuyiwcobdv6cl6j.cloudflarestream.com%2F30b00d5cf6ff27876552582572ba07c7%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            ]
        }
    },
    }

</script>
