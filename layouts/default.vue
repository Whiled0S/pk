<template>
  <div class="default-layout">
    <Header white main />

    <div class="default-layout__content">
      <container>
        <nuxt />
      </container>
    </div>

    <footer-mini />
  </div>
</template>

<style>

</style>
<script>
import Header from '../components/core/limbs/Header'
import FooterMini from '../components/core/limbs/FooterMini'
import Container from '../components/core/Container'
export default {
  components: { Container, FooterMini, Header }
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
