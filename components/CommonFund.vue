<template>
  <div class="fund">
      Funded by&nbsp;
      <nuxt-img src="@/assets/image/logo_cuhk3.png" style="position: relative; width: 90px; margin-top: 5px"/>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader'
}
</script>

<style>
.fund{
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    background: white;
    right: 0px;
    top: calc(100% - 150px);
    padding: 10px;
    height: 120px;
    /* box-shadow: 0 0 5px 1px gray; */
    color: #6d0e77;
    align-items: center;
}

</style>
