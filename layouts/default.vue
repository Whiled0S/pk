<template>
  <div class="default-layout">
    <Header white main />

    <div class="default-layout__content">
      <container>
        <nuxt />
      </container>
    </div>

    <footer-mini />

    <mobile-menu />
  </div>
</template>

<style>

</style>
<script>
import Header from '../components/core/limbs/Header'
import FooterMini from '../components/core/limbs/FooterMini'
import Container from '../components/core/Container'
import MobileMenu from '../components/core/mobile-menu/MobileMenu'
export default {
  components: { MobileMenu, Container, FooterMini, Header },
  watch: {
    $route () {
      this.$store.commit('SET_MOBILE_MENU_STATUS', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;

    &__content {
      padding: 60px 0;
      flex-grow: 1;

      @include respond-to($tablet) {
        padding: 20px 0 40px;
      }
    }
  }
</style>
