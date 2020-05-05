<template>
  <div class="index-layout">
    <Header class="index-layout__header" />

    <div class="index-layout__content">
      <nuxt />
    </div>

    <Footer class="index-layout__footer" />

    <mobile-menu />
  </div>
</template>

<style scoped>

</style>
<script>
import Header from '../components/core/limbs/Header'
import Footer from '../components/core/limbs/Footer'
import MobileMenu from '../components/core/mobile-menu/MobileMenu'
export default {
  name: 'IndexLayout',
  components: { MobileMenu, Footer, Header },
  watch: {
    $route () {
      this.$store.commit('SET_MOBILE_MENU_STATUS', false)
    }
  }
}
</script>

<style lang="scss">
  .index-layout {
    position: relative;
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

    &__footer {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }
</style>
