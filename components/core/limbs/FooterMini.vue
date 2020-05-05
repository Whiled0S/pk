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

    @include respond-to($tablet) {
      padding: 15px 0;
    }

    &__text {
      @include f-d-text;
      color: $white;

      @include respond-to($tablet) {
        font-size: 12px;
        line-height: 26px;
      }
    }
  }
</style>
