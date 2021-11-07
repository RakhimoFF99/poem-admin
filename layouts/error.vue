<template>
  <div class="wrapper">
  <h3 class="mb-0" style="margin-right:10px;font-weight:500">
      Sahifa topilmadi
  </h3>
    <div class="line"></div>
    <NuxtLink  class="mt-1" style="margin-left:10px" to="/poem">Bosh sahifaga qayting !</NuxtLink>
  </div>
</template>

<script>
  export default {
    layout: 'authLayout'
  }
</script>

<style  scoped>
    .wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    }
    .line{
    background-color: rgba(0, 128, 128, 0.267);
    height: 120px;
    width: 0.1px;
    }
</style>