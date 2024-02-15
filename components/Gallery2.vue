<template>
    <div style="width: 300px; height: 400px; background: #f6f6f8;
        display: flex; flex-direction: column; justify-content: space-between; padding: 0;"> 
        <div>
            <img :src="image" style="width: 100%; height: auto; aspect-ratio: 3 / 2">
            <div style="padding: 5px 10px 10px 10px ">
                <div class="font-small" style="color: #6d0e77; font-weight: 600;">{{title}}</div>
                <div class="font-mini">{{subtitle}}</div>
            </div>
        </div>
        <div style="padding: 10px">
            <a style="color: #ffa500; line-height: 30px; cursor: pointer" :href="url">更多>></a>
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
    }
  }
}
</script>