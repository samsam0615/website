<template>
    <video ref="myVideo"
        id="myVideo"
        style=" right: 0; bottom: 0; width: 100%; height: 100%; object-fit: cover; "
        autoplay
        muted
        loop
        playsinline
        webkit-playsinline
      >
      <source :src="'https://video.eduairhk.com/intro.mp4'" type="video/mp4">
    </video>
</template>

<script>
export default {
  name: 'VideoBackground',
  mounted(){
    this.$refs.myVideo.play()
  }
}
</script>

<style scoped>

</style>
