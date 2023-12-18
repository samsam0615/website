<template>
    <div class="expand-field font-middle">
        <div class="expand-field-top">
            <div style="display: flex; flex-direction: row; align-items: center;">
                <div class="question">{{number}}</div>
                {{title}}
            </div>
            <div class="expand-button" v-if="displayArrow" @click="isExpand = !isExpand">
                <img :src="'/image/materials/icon_expand.png'" v-if="!isExpand">
                <img :src="'/image/materials/icon_narrow.png'" v-else>
            </div>
        </div>
        <div class="expand-field-bottom" v-if="isExpand || !displayArrow">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ExpandField',
  props: ['title', 'number', 'displayArrow', 'isExpand'],
  data () {
    return {
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.expand-field{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 750px;
    max-width: 90vw
}

.expand-field-top{
    width: 100%;
    color: orange;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.expand-field-top .question{
    width: 40px;
    height: 40px;
    font-size: 25px;
    border-radius: 50%;
    background: rgb(255,165,0);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}

.expand-button{
    display: flex;
    justify-self: flex-end;
    color: orange;
    cursor: pointer;
    align-items: center;
}

.expand-field-bottom{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    background: linear-gradient(to right, #f7d2b5, #FFD1A4);;
    /* padding: 20px 0 20px 0; */
    color: white;
    border-radius: 5px;
    color: #5b2700;
}
</style>