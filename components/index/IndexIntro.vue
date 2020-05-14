<template>
  <div class="index-intro">
    <div class="index-intro__content">
      <container>
        <h1 class="index-intro__title">
          Аутсорсинг бухгалтерии<br>юридических услуг
        </h1>
      </container>
    </div>
  </div>
</template>

<script>
import Container from '../core/Container'
export default {
  name: 'IndexIntro',
  components: { Container }
}
</script>

<style lang="scss" scoped>
  .index-intro {
    position: relative;
    height: 410px;
    background-color: $dark-blue;
    background-image: url('../../assets/images/pattern.svg');

    @include respond-to($tablet) {
      height: 240px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(180deg, #4D4D99 0%, rgba(77, 77, 153, 0.4) 22.73%, rgba(77, 77, 153, 0) 100%);
    }

    &__content {
      display: flex;
      align-items: flex-end;
      height: 100%;
      padding-bottom: 70px;
      box-sizing: border-box;

      @include respond-to($tablet) {
        padding-bottom: 30px;
      }
    }

    &__title {
      position: relative;
      @include f-d-intro;
      display: block;
      color: $white;
      animation: appear 1s ease-in-out forwards;
      animation-delay: .3s;
      opacity: 0;

      @include respond-to($tablet) {
        @include f-m-intro;
        text-align: center;
        z-index: 1;
      }
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(50%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
