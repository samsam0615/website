<template>
    <div :style="{height: height + 'px'}" style="width: 300px; background: #f6f6f8;
        display: flex; flex-direction: column; justify-content: space-between; padding: 0;"> 
        <div>
            <img :src="image" style="width: 100%; height: auto; aspect-ratio: 3 / 2; background:#FFEBCD">
            <div style="padding: 5px 10px 10px 10px ">
                <div class="font-small" :style="{color: color}" style="font-weight: 600;">{{title}}</div>
                <div class="font-mini">{{subtitle}}</div>
            </div>
        </div>

        <div style="padding: 10px">
            <NuxtLink :to="url" :style="{color: urlColor}" style="line-height: 30px; cursor: pointer">
                更多>>
            </NuxtLink>
            <div>{{date}}</div>
        </div>
    </div>
</template>

<script>
export default {
  props:{
    title: {
        type: String,
        default: "Title"
    },
    subtitle: {
        type: String,
        default: null
    },
    image:{
        type: String,
        default: ''
    },
    url:{
        type: String,
        default: ''
    },
    date:{
        type: String,
        default: ''
    },
    height:{
        type: Number,
        default: 400
    },
    color:{
        type: String,
        default: '#6d0e77'
    },
    urlColor:{
        type: String,
        default: '#ffa500'
    }
  }
}
</script>
