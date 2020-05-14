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
  head () {
    return {
      link: [
        { rel: 'canonical', href: `https://pravo-kons.ru${this.$route.path}` }
      ],
      meta: [
        { hid: 'og:site_name', property: 'og:site_name', content: 'ООО "ПК"' },
        { hid: 'og:title', property: 'og:title', content: 'ООО "ПК"' },
        { hid: 'og:description', property: 'og:description', content: 'Аутсорсинг бухгалтерии юридических услуг' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: `https://pravo-kons.ru${this.$route.path}` },
        { hid: 'og:image', property: 'og:image', content: 'https://pravo-kons.ru/logo.jpg' }
      ]
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
