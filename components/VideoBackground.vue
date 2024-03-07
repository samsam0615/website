<template>
    <video ref="myVideo"
        id="myVideo"
        style=" right: 0; bottom: 0; width: 100%; height: 100%; object-fit: cover; margin-top: 60px; padding:"
        autoplay
        muted
        loop
        playsinline
        webkit-playsinline
      >
      <source :src="'/intro.mp4'" type="video/mp4">
    </video>
</template>

<script>
export default {
  name: 'VideoBackground',
  mounted(){
    try {
      this.$refs.myVideo.play()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>

</style>
