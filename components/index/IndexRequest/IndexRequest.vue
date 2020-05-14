<template>
  <div id="index-request" class="index-request">
    <div class="index-request__gradient" />
    <container class="index-request__content">
      <h2 class="index-request__title">
        Заявка
      </h2>

      <div class="index-request__form-container">
        <index-request-form />
      </div>
    </container>
  </div>
</template>

<script>
import Container from '../../core/Container'
import IndexRequestForm from './IndexRequestForm'
export default {
  name: 'IndexRequest',
  components: { IndexRequestForm, Container }
}
</script>

<style lang="scss" scoped>
  .index-request {
    position: relative;
    padding: 40px 0 211px;
    background: $dark-blue;

    @include respond-to($tablet) {
      padding: 20px 0 76px;
      background-image: url('../../../assets/images/pattern.svg');
      background-repeat: repeat;
    }

    &::before,
    &::after {
      position: absolute;
      content: '';
      right: 0;
      top: 0;
      bottom: 0;

      @include respond-to($tablet) {
        display: none;
      }
    }

    &::after {
      left: calc(50% + 143px);
      background-image: url('../../../assets/images/pattern.svg');
      background-repeat: repeat;
    }

    &::before {
      left: calc(50% + 30px);
      background-image: url('../../../assets/images/pattern-partial.svg');
      background-repeat: repeat-y;
    }

    &__gradient {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, rgba(77, 77, 153, 0) -1.28%, rgba(77, 77, 153, 0.7) 53.55%, rgba(77, 77, 153, 0.85) 100%);
      transform: matrix(-1, 0, 0, 1, 0, 0);
      z-index: 1;

      @include respond-to($tablet) {
        background-color: $dark-blue;
        opacity: .5;
      }
    }

    &__content {
      position: relative;
      z-index: 2;
    }

    &__title {
      @include f-d-h1;
      color: $white;
      margin-bottom: 60px;

      @include respond-to($tablet) {
        @include f-m-h1;
        margin-bottom: 15px;
      }
    }

    &__form-container {
      width: 540px;

      @include respond-to($tablet) {
        width: 100%;
      }
    }
  }
</style>
