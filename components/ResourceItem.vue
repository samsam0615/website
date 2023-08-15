<template>
  <div class="resourceItem" @click.prevent="click" @touchleave.prevent="touchleave">
    <div>
      <img :src="'https://www.google.com/s2/favicons?sz=64&domain=' + url" :alt="text.charAt(0)" style="width: 50%; height: 50%; font-size: 30px" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceItem',
  props: {
    text: String,
    url: String,
  },
  methods: {
    data(){
      return {
        src: null
      }
    },
    click () {
      this.$emit('click')
    },
    touchleave () {
      this.$emit('touchleave')
    },
  }
}
</script>

<style>
.resourceItem{
    flex-basis: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}

.resourceItem div{
    width: 80px;
    height: 80px;
    margin: 10px 20px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #f2f3f5;
    text-align: center;
    cursor: pointer;
    transition: background 0.5s;
}

.resourceItem div:hover{
    background: rgb(235,235,235);
}

.resourceItem.active div{
    background: rgb(200,200,200);
}

@keyframes mymove {
    from {background-color: red;}
    to {background-color: blue;}
}

@media screen and (min-width: 768px) and (max-width: 1000px){
    .resourceItem{
        flex-basis: 50%;
    }
}

@media screen and (max-width: 767px){
    .resourceItem{
        flex-basis: 20%;
    }

    .resourceItem div{
        width: 90px;
        height: 90px;
    }
}
</style>
