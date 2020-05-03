<template>
  <footer class="footer-mini">
    <container>
      <p class="footer-mini__text">
        Аутсорсинг бухгалтерии юридических услуг
      </p>
    </container>
  </footer>
</template>

<script>
import Container from '../Container'
export default {
  name: 'FooterMini',
  components: { Container }
}
</script>

<style lang="scss" scoped>
  .footer-mini {
    width: 100%;
    padding: 40px 0;
    background-color: $dark-blue;

    &__text {
      @include f-d-text;
      color: $white;
    }
  }
</style>
