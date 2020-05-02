<template>
  <div class="index-layout">
    <Header class="index-layout__header" />

    <div class="index-layout__content">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<style scoped>

</style>
<script>
import Header from '../components/core/limbs/Header'
import Footer from '../components/core/limbs/Footer'
export default {
  components: { Footer, Header }
}
</script>

<style lang="scss">
  .index-layout {
    min-height: 100%;
    display: flex;
    flex-direction: column;

    &__header {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }

    &__content {
      flex-grow: 1;
      min-height: auto;
    }
  }
</style>
