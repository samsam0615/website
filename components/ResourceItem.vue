<template>
  <div class="resourceItem" @click.prevent="click" @touchleave.prevent="touchleave">
    <div class="image">
      <img :src="'https://www.google.com/s2/favicons?sz=64&domain=' + url" :alt="text.charAt(0)" style="width: 50%; height: 50%; font-size: 30px" >
    </div>
    <div style="text-align: center; min-height: 40px"> 
          {{text}}

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
    flex-basis: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
}

.resourceItem .image{
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

.resourceItem .image:hover{
    background: rgb(235,235,235);
}

.resourceItem.active .image{
    background: rgb(200,200,200);
}

@keyframes mymove {
    from {background-color: red;}
    to {background-color: blue;}
}



</style>
