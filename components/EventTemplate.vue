<template>
    <div class="pageContent-container" style="max-width: 100%; width: 1024px">
        <div style="width: 100%; padding: 10px 20px; max-width: 1200px;">
            <div class="font-big" style="align-self: flex-start; padding: 20px 0 0 0; font-weight: 600; color: #6d0e77">{{title}}</div>
            <div class="font-middle" style="padding: 8px 0">{{subtitle}}</div>
            <div class="font-small" style="display: flex; align-items: center; padding: 5px 0"><img :src="'/image/calendargray.png'" style="width: 50px; padding: 0 9px">{{date}}</div>
            <div class="font-small" style="display: flex; align-items: center; padding: 5px 0"><img :src="'/image/location4gray.png'" style="width: 50px; padding: 0 9px">{{location}}</div>
        </div>
    <Gallery4 :images="images">
        <slot/>
    </Gallery4>
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
    date: {
        type: String,
        default: null
    },
    location: {
        type: String,
        default: null
    },
    images:{
        type: Array,
        default: function(){
            return ['logo.png', 'logo.png', 'logo.png', 'logo.png', 'logo.png']
        }
    }
  },
  data(){
    return {
        url: null
    }
  },
  methods: {
    setImage (url) {
        this.url = url
    }
  },
  mounted(){
    this.setImage(this.images[0])
  }
}
</script>