<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
  }
</style>
