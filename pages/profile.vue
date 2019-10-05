<template>
  <div class="container d-flex align-items-center justify-content-center flex-column">
    Profile
  </div>
</template>

<script>
    export default {
        middleware: 'auth',
    }
</script>



<style scoped>
  .container {
    min-height: 70vh;
  }
</style>
