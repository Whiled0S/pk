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
