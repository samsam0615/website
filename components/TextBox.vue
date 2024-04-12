<template>
    <div class="text-box font-small">
        <div style="display: flex; align-items: center; padding-bottom: 20px;"> 
            <img :src="image">
            <label class="title">{{title}}</label>
        </div>
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: ['title', 'image'],
  methods:{
  }
}
</script>

<style scoped>
.text-box {
    position: relative;
    max-width: 100%;
    color: #7c7c7c;
    border: 3px solid orange;
    border-radius: 10px;
    /* font-size: 20px; */
    /* font-weight: 600; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 30px;
    width: max-content;
    
}

.text-box .title{
    font-size: 30px;
}

.text-box img{
    max-height: 50px;
    height: 70%; 
    margin-right: 30px
}

@media screen and (max-width: 1199.9px) {
    .text-box{
        line-break: auto;
        max-width: 100%;
        font-size: 18px;
    }

    .text-box .title{
        font-size: 23px;
        line-break: anywhere;
    }
}
</style>