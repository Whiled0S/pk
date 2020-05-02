<template>
  <div class="index-intro">
    <div class="index-intro__content">
      <container>
        <span class="index-intro__title">Аутсорсинг бухгалтерии<br>юридических услуг</span>
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
    height: 100vh;
    background-color: $dark-blue;
    background-image: url('../../assets/images/pattern.svg');

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
    }

    &__title {
      @include f-d-intro;
      color: $white;
    }
  }
</style>
