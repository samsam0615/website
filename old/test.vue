<template>
  <div class="pageContent-container" >
    <div style="width: 80%; background: blue" class="pdf-viewer">
      <!-- <vue-pdf-embed :source="source1"  style="width: 150px" @click="click" ref="1"/> -->
      <vue-pdf-embed :source="source1"  style="width: 800px" @click="click" ref="a2"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CUHK-iPort',
  components: {
  },
  data() {
    return {
      source1: '/777.pdf'
    }
  },
  methods: {
    click (num) {
      console.log(this.$refs.a2)
    }
  }
}
</script>
