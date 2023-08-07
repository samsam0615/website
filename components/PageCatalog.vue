<template>
  <div class="page-catalog">
    <label>{{title}}</label>
    <div v-for="(item, index) in list" :key="item" @click="click(index)">
      <a>
        {{item}}
        <span />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueCatalog',
  props: ['title', 'list'],
  emits: ['click'],
  methods: {
    click (index) {
      this.$emit('click', index)
    }
  }
}
</script>

<style scoped>
  .page-catalog{
    display: flex;
    flex-direction: column;
    padding-right: 100px;
    position: -webkit-sticky;
    position: sticky;
    width: 350px;
    top: 110px;
  }

  @media screen and (max-width: 1200px) {
    .page-catalog{
      display: none;
    }    
  }

  .page-catalog label{
    font-size: 35px;
    padding: 15px 0;
    font-weight: 600;
    width: 100%;
    color: orange;
  }

  .page-catalog div{
    position: relative;
    padding: 20px 30px;
    min-width: 330px;
    border-left: 3px solid #cad7e7;
    color: #7c7c7c;
    font-size: 20px;
    width: max-content;
    cursor: pointer;
  }

  .page-catalog div a{
    display: flex;
    flex-direction: column;
    width: max-content;
  }

  .page-catalog div a span{
    width: 0px;
    height: 3px;
    background: orange;
    transition: all .3s ease-in;
  }

  .page-catalog div:hover{
    color: orange;
  }

  .page-catalog div:hover a span{
    width: 100%;
  }

</style>
