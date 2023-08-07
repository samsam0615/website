<template>
  <div class="resourceItem" @click.prevent="click" @touchleave.prevent="touchleave">
    <div>
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceItem',
  props: {
    text: String
  },
  methods: {
    click () {
      this.$emit('click')
    },
    touchleave () {
      this.$emit('touchleave')
    }
  }
}
</script>

<style>
.resourceItem{
    flex-basis: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}

.resourceItem div{
    width: 95px;
    height: 95px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: #fbfbfb;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
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
