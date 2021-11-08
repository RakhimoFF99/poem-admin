<template>
  <div class="py-4 px-5">
    <div class="d-flex justify-content-center">
      <h2>{{ $store.state.poem.name }}</h2>
    </div>
    <h6 class="text-align:justify">
      {{ $store.state.poem.poem }}
    </h6>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>