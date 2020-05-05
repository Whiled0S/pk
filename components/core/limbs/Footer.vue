<template>
  <footer class="footer">
    <container>
      <navbar class="desktop-only" bottom />

      <div class="footer__tablet-nav">
        <img src="../../../assets/images/logo.svg" alt="logo">

        <span>+7 900 300-20-20</span>
      </div>
    </container>
  </footer>
</template>

<script>
import Navbar from '../Navbar'
import Container from '../Container'
export default {
  name: 'Footer',
  components: { Container, Navbar }
}
</script>

<style lang="scss" scoped>
  .footer {
    padding: 40px 0 50px;
    background: linear-gradient(180deg, rgba(77, 77, 153, 0) 0%, #4D4D97 100%);
    color: $white;

    @include respond-to($tablet) {
      padding: 17px 0;
      background: linear-gradient(0deg, #4D4D99 0%, rgba(77, 77, 153, 0.4) 22.73%, rgba(77, 77, 153, 0) 100%);
    }

    &__tablet-nav {
      display: none;
      justify-content: space-between;
      align-items: center;

      img {
        height: 30px;
      }

      span {
        @include f-m-text;
      }

      @include respond-to($tablet) {
        display: flex;
      }
    }
  }
</style>
